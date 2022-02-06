import React from 'react';
import './navbarpages.scss'

const NavBarPage = (props) => {

  const nav = () => {
    const $panel = document.querySelector('.navbarpages-panel');
    const $boton = document.getElementById('boton');
  
    $panel.classList.toggle('is-active');
  
    $boton.classList.forEach(el => {
      if (el === 'is-active') {
        return $boton.classList.remove('is-active');
      }else {
        $boton.classList.add('is-active');
      }
    });
  }

  const valor = (props) => {
    // props.objeto.title = "hola";
    
    console.log(props.objeto);
  }

  return (
    <>
      <section className="navbarpages-container ">
        <div className="navbarpages-btn">
          <button className="panel-btn hamburger hamburger--minus" type="button" id="boton" onClick={nav}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="navbarpages-panel">
          <div className="panel-item">
            <span>Titulo</span>
            <button onClick={() => valor(props)}><i className="gg-add-r"></i></button>
          </div>
          <div className="panel-item">
            <span>Subtitulo</span>
            <button><i className="gg-add-r"></i></button>
          </div>
          <div className="panel-item">
            <span>Descripción</span>
            <button><i className="gg-add-r"></i></button>
          </div>
          <div className="panel-item">
            <span>Tabla</span>
            <button><i className="gg-add-r"></i></button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBarPage;
