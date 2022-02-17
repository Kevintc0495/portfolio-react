import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UrlContext from '../../context/UrlContext';
import './pokemonItems.scss';

const PokemonItems = () => {
  const [ pokemons, setPokemons ] = useState([]);
  const { nameId, url } = useContext( UrlContext );


  useEffect(() => {
  setPokemons([]);
  
  const pokemonApi = async (url) => {
    let pokemon = {};
    let res = await fetch(url);
    let json = await res.json();

    if (nameId) {
      let types = [];

      pokemon = {
        id: json.id,
        img: json.sprites.other.home.front_default,
        name: json.name,
      }

      json.types.map(el => {
        types.push(el.type.name)

        pokemon = {
          ...pokemon,
          type: types,
        }
      })

      setPokemons( pokemons => ([...pokemons, pokemon]));

    }else {
      for (let i = 0; i < json.results.length; i++) {
        const el = json.results[i];
        let types = [];
        let { url } = el;
        let res = await fetch(url);
        let data = await res.json();

        pokemon = {
          id: data.id,
          img: data.sprites.other.home.front_default,
          name: data.name,
        }
        
        data.types.map(el => {
          types.push(el.type.name)

          pokemon = {
            ...pokemon,
            type: types,
          }
        })
        console.log(pokemon);

        setPokemons( pokemons => ([...pokemons, pokemon]));
        
      }
    }
  }

  pokemonApi(url);

}, [ url ]);

  return (
    <>
      <main className='pokemonItems-container'>
        <section className='pokemonItems-btns'>
          {/* { offset > 1 &&  */}
        </section>
        <section className="pokemonItems-pokemons">
        {pokemons.length === 0 ? (
          <h3>Cargando</h3>
        ): 
        ( pokemons.map( el => 
        (<article className={`pokemonItems-card bg-${ el.type[0] }`} key={ el.id }>
            <div className="card-img">
              {/* <Link to={`${el.name}`}> */}
                <img src={ el.img } alt={ el.name } />
              {/* </Link> */}
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