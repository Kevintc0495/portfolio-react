import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './pokemonImg.scss'
import PokemonContext from '../../context/PokemonContext';


const PokemonImg = () => {
  const { pokemon } = useContext(PokemonContext)


  return (
    <>
      <section className='pokemonImg-container'>
        {pokemon.map( el => 
        <article className={`pokemonImg-img bg-${ el.type[0].name }`} key={ el.id }>
          <img src={ el.img } alt={ el.name } />
          <Link to='/pokemons'>
            <button><pre><code>&lt;</code></pre></button>
          </Link>
        </article>)}
      </section>
    </>
  )
}

export default PokemonImg