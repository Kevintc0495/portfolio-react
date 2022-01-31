import React from 'react';
import './presentation.scss';
import small from '../../assets/img/small.jpg'
import medium from '../../assets/img/medium.jpg'
import large from '../../assets/img/large.jpg'
import foto from '../../assets/img/foto.jpg'
import pdf from '../../assets/cv/cv.pdf'

const Presentation = () => {
  return (
    <>
      <section className="home-container" id='home'>
        <div className="home-image">
          <picture>
            {/* <source media="(min-width: 1200px)" srcset={large}/>
            <source media="(min-width: 768px)" srcset={medium}/> */}
            <img src={small} alt="image"/>
            <div className="home-picture">
              <img src={foto} alt=""/>
            </div>
          </picture>
        </div>
        <article className="home-profile">
          <h3>Hola, mi nombre es Kevin Torres</h3>
          <p>Soy Frontend developer con experiencia desarrollando y manteniendo aplicaciones web basadas en Vue/Vuex/Vue Router. Estudiante de la carrera de ingeniería de Sistema e Informática en la Universidad Tecnológica del Perú. Me considero una persona autodidacta, apasionado del desarrollo web con JavaScript y dispuesto a afrontar cualquier reto.</p>
          <div className='home-cv'> 
            <a href={pdf} download="Curriculum Vitae" >
              <button>Download CV</button>
            </a>
          </div>
        </article>
      </section> 
    </>
  );
};

export default Presentation;