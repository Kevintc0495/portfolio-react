import React from 'react'
import './pokemon.scss'
import PokemonImg from '../../components/PokemonImg/PokemonImg';
import { PokemonProvider } from '../../context/PokemonContext';
import PokemonDescription from '../../components/PokemonDescription/PokemonDescription';

const Pokemon = () => {

  return (
    <>
      <PokemonProvider>
        <section className='pokemon-container'>
          <PokemonImg/>
          <PokemonDescription/>
        </section>
      </PokemonProvider>
    </>
  )
}

export default Pokemon