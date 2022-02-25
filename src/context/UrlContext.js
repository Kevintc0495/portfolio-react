import { createContext, useRef, useState } from "react";

const UrlContext = createContext();

const initialUrl = "https://pokeapi.co/api/v2/pokemon?limit=24&offset=0";

const UrlProvider = ({ children }) => {
  const selectRef = useRef();
  const [ nameId, setNameId ] = useState('');
  const [ offset, setOffset ] = useState(0);
  const [ limit, setLimit ] = useState(24);
  const [ url, setUrl ] = useState( initialUrl );
  const [ pokemons, setPokemons ] = useState([]);
  const [arrow, setArrow] = useState(true);
  const [loader, setLoader] = useState(false);

  const searchNameId = (e) => {
    setNameId(e.target.previousSibling.value.toLowerCase());
    setUrl(`https://pokeapi.co/api/v2/pokemon/${e.target.previousSibling.value.toLowerCase()}`);
    selectRef.current.value = '';
    e.target.previousSibling.value = '';
  };

  const searchselect = (e) => {
    setNameId('');
    if ( e.target.value === 'lowerNumber' ) {
      setOffset(0);
      setLimit(24);
      setArrow(true);
      setUrl('https://pokeapi.co/api/v2/pokemon?limit=24&offset=0');
    }
  };

  const next = () => { 
    let x = offset;
    setUrl(`https://pokeapi.co/api/v2/pokemon?limit=24&offset=${ x + 24 }`);
    setOffset( offset + 24 );
    setLimit( limit + 24 );
  };

  const previous = (e) => { 
    if (offset !== 0) {
      let x = offset;
      setUrl(`https://pokeapi.co/api/v2/pokemon?limit=24&offset=${ x - 24 }`);
      setOffset( offset - 24 );
      setLimit( limit - 24 );
    }
  };
  
  const data = { 
    nameId, 
    url, 
    searchNameId, 
    searchselect, 
    next, 
    previous, 
    offset, 
    limit,
    pokemons, 
    setPokemons,
    selectRef,
    arrow,
    setArrow,
    loader,
    setLoader
   };
  
  return <UrlContext.Provider value={ data }>{children}</UrlContext.Provider>
}

export { UrlProvider };
export default UrlContext;