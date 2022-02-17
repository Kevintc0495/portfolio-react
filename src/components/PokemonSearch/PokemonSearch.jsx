import React, { useContext } from 'react'
import './pokemonSearch.scss';
import UrlContext from '../../context/UrlContext';

const PokemonSearch = () => {
  const { searchNameId, searchselect, offset, limit, next, previous } = useContext(UrlContext);

  const selectSearch = () => {
    const $name = document.querySelector('.ps-name');
    const $select = document.querySelector('.ps-select');

    $name.classList.toggle('hidden');
    $select.classList.toggle('visibility');
  }

  return (
    <>
      <section  className='ps-container'>
        <article className='ps-input'>
          <div className='ps-name'>
            <input type="text" placeholder='Busqueda por nombre o número'/>
            <i onClick={ searchNameId } className="gg-search"></i>
          </div>
          <div className='ps-select'>
            <select name="order" id="search-select" onChange={ searchselect }>
              <option value="">Ordenar por...</option>
              <option value="lowerNumber">Número inferior</option>
            </select>
          </div>
        </article>
        <div className='ps-type' onClick={ selectSearch }>
          <i className="gg-options"></i>
        </div>
        <article className='ps-btn'>
          <div className='ps-btn-previous'>
            <i onClick={ previous } className="gg-arrow-left-r"></i>
          </div>
          <div className='ps-text'>
            <span>{ offset } - { limit }</span>
          </div>
          <div className='ps-btn-next'>
            <i onClick={ next } className="gg-arrow-right-r"></i>
          </div>
        </article>
      </section>
    </>
  )
}

export default PokemonSearch