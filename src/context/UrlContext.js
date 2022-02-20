import { createContext, useState } from "react";

const UrlContext = createContext();

const initialUrl = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

const UrlProvider = ({ children }) => {
  const [ nameId, setNameId ] = useState('');
  const [ offset, setOffset ] = useState(0);
  const [ limit, setLimit ] = useState(20);
  const [ url, setUrl ] = useState( initialUrl );
  const [ pokemons, setPokemons ] = useState([]);


  const searchNameId = (e) => {
    setNameId(e.target.previousSibling.value.toLowerCase());
    setUrl(`https://pokeapi.co/api/v2/pokemon/${e.target.previousSibling.value.toLowerCase()}`);

    const $select = document.getElementById('search-select');
    const $arrows = document.querySelector('.ps-btn');
    $arrows.style.display = "none";
    $select.value = '';
    e.target.previousSibling.value = '';
  };

  const searchselect = (e) => {
    const $arrows = document.querySelector('.ps-btn');
    setNameId('');
    if ( e.target.value === 'lowerNumber' ) {
      setOffset(0);
      setLimit(20);
      $arrows.style.display = "flex";
      setUrl('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
    }
  };

  const next = () => { 
    let x = offset;
    setUrl(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${ x + 20 }`);
    setOffset( offset + 20 );
    setLimit( limit + 20 );
  };

  const previous = (e) => { 
    if (offset !== 0) {
      let x = offset;
      setUrl(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${ x - 20 }`);
      setOffset( offset - 20 );
      setLimit( limit - 20 );
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
   };
  
  return <UrlContext.Provider value={ data }>{children}</UrlContext.Provider>
}

export { UrlProvider };
export default UrlContext;