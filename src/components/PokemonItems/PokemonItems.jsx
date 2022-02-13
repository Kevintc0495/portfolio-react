import React, { useEffect, useState } from 'react';
import './pokemonItems.scss';

const PokemonItems = () => {
  const [ pokemons, setPokemons ] = useState([]);
  const [ offset, setOffset ] = useState(0);
  
  const next = () => { setOffset(offset + 20) };

  const previous = () => { setOffset(offset - 20) };


useEffect(() => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${ offset }`;
  setPokemons([])
  
  const pokemonApi = async (url) => {
    console.log("Actualiza");
    let pokemon = {}
    const res = await fetch(url);
    const json = await res.json();

    json.results.map( async (el) => {
      let { url } = el;
      let types = [];
      const res = await fetch(url);
      const data = await res.json();

      pokemon = {
        id: data.id,
        img: data.sprites.other.dream_world.front_default,
        name: data.name,
      }
      
      data.types.map(el => {
        types.push(el.type.name)

        pokemon = {
          ...pokemon,
          type: types,
        }
      })

      setPokemons( pokemons => ([...pokemons, pokemon]))
    })
  }

  pokemonApi(url)

}, [ offset ])

  return (
    <>
      <main className='pokemonItems-container'>
        <section className='pokemonItems-btns'>
          <button onClick={ previous }>Previous</button>
          <button onClick={ next }>Next</button>
        </section>
        <section className="pokemonItems-pokemons">
        {pokemons === 0 ? (
          <h3>Cargando</h3>
        ): 
        ( pokemons.map( el => 
        (<article className={`pokemonItems-card bg-${ el.type[0] }`} key={ el.id }>
            <div className="card-img">
              <img src={ el.img } alt={ el.name } />
            </div>
            <span className='card-number'>#{ el.id }</span>
            <h3 className='card-name'>{ el.name }</h3>
            <div className='card-types'>
              { el.type.map( (type, index) => (<span className={`card-type ${ type }`} key={index}>{ type }</span>))}
            </div>
          </article>))
          )}
        </section>
      </main>
    </>
  )
}

export default PokemonItems