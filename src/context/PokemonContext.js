import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UrlContext from "./UrlContext";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const { name } = useParams();
  const { pokemons } = useContext( UrlContext );
  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    let pokemon = pokemons.filter(el => el.name === name);
    setPokemon([...pokemon]);
  }, [])

  const data = {
    pokemon
  }

  return <PokemonContext.Provider value={ data }>{ children }</PokemonContext.Provider>
}

export { PokemonProvider };
export default PokemonContext;