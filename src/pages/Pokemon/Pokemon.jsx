import React from 'react';
import PokemonItems from '../../components/PokemonItems/PokemonItems';
import './pokemon.scss';

const Pokemon = () => {
  return (
    <>
      <header className='pokemon-header-container'>
        <h1>POKEDEX</h1>
      </header>
      <PokemonItems/>
      <footer className='pokemon-footer-container'>
        <h4>Copyright</h4>
      </footer>
    </>
  )
}

export default Pokemon