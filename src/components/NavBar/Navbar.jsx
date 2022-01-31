import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss'


const Navbar = () => {

const panel = (e) => {
  const $panel = document.querySelector('.panel');
  const $boton = document.getElementById('boton');

  $panel.classList.toggle('is-active');

  $boton.classList.forEach(el => {
    if (el === 'is-active') {
      return $boton.classList.remove('is-active');
    }else {
      $boton.classList.add('is-active');
    }
  });
  console.log(e.target);
}

  return (
  <>
    <header>
      <section className="navbar-container">
        <article className="navbar-code">
          <span>¡</span>
          <h3>Kevin Torres</h3>
          <span>!</span>
        </article>
        <button className="panel-btn hamburger hamburger--vortex" type="button" id="boton" onClick={panel}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <article className="navbar-links">
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolios</a>
          <a href="#skill">Skills</a>
          <a href="#contact">Contact</a>
        </article>
        <aside className="panel">
          <nav className="menu">
            <a onClick={panel} href="#home">Home</a>
            <a onClick={panel} href="#portfolio">Portfolios</a>
            <a onClick={panel} href="#skill">Skills</a>
            <a onClick={panel} href="#contact">Contact</a>
          </nav>
        </aside>
      </section>
    </header>
  </>
  );
};

export default Navbar;
