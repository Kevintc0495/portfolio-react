import React from 'react';
import PokemonItems from '../../components/PokemonItems/PokemonItems';
import PokemonSearch from '../../components/PokemonSearch/PokemonSearch';
import { UrlProvider } from '../../context/UrlContext';
import './pokemons.scss';

const Pokemon = () => {
  return (
    <>
      <header className='pokemon-header-container'>
        <h1>POKEDEX</h1>
      </header>
      <UrlProvider>
        <PokemonSearch/>
        <PokemonItems/>
      </UrlProvider>
      <footer className='pokemon-footer-container'>
        <h4>Copyright</h4>
      </footer>
    </>
  )
}

export default Pokemon