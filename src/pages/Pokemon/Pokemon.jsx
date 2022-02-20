import React from 'react'
import './pokemon.scss'
import PokemonImg from '../../components/PokemonImg/PokemonImg';
import { PokemonProvider } from '../../context/PokemonContext';
import PokemonDescription from '../../components/PokemonDescription/PokemonDescription';

const Pokemon = () => {

  return (
    <>
      <PokemonProvider>
        <PokemonImg/>
        <PokemonDescription/>
      </PokemonProvider>
    </>
  )
}

export default Pokemon