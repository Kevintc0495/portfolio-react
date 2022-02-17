import { createContext, useState } from "react";

const UrlContext = createContext();

const initialUrl = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

const UrlProvider = ({children}) => {
  const [ nameId, setNameId ] = useState('');
  const [ offset, setOffset ] = useState(0);
  const [ limit, setLimit ] = useState(20);
  const [ url, setUrl ] = useState( initialUrl );

  const searchNameId = (e) => {
    const $select = document.getElementById('search-select');
    const $arrows = document.querySelector('.ps-btn');
    $arrows.style.display = "none";
    $select.value = '';
    setNameId(e.target.previousSibling.value.toLowerCase());
    setUrl(`https://pokeapi.co/api/v2/pokemon/${e.target.previousSibling.value.toLowerCase()}`);
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
    console.log('next');
    setUrl(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${ x + 20 }`);
    setOffset( offset + 20 );
      setLimit( limit + 20 );
  };

  const previous = (e) => { 
    if (offset != 0) {
      let x = offset;
      setUrl(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${ x - 20 }`);
      setOffset( offset - 20 );
      setLimit( limit - 20 );
    }
    // if (offset === 0) {
    //   e.target.disabled = true;
    // }
  };
  
  const data = { url, searchNameId, searchselect, nameId, next, previous, offset, limit };
  
  return <UrlContext.Provider value={ data }>{children}</UrlContext.Provider>
}

export { UrlProvider };
export default UrlContext;