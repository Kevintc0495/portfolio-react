import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss'


const Navbar = () => {
  return (
  <>
    <header>
      <section className="navbar-container">
        <article className="navbar-code">
          <span>¡</span>
          <h3>Kevin Torres</h3>
          <span>!</span>
        </article>
        <article className="navbar-links">
          <Link to="">Home</Link>
          <Link to="">About</Link>
          <Link to="">Portfolios</Link>
          <Link to="">Contact</Link>
        </article>
      </section>
    </header>
  </>
  );
};

export default Navbar;
