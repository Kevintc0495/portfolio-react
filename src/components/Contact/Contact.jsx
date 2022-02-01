import React from 'react';
import './contact.scss';
import gmail from '../../assets/img/gmail.png'
import gitHub from '../../assets/img/github.png'
import linkedin from '../../assets/img/linkedin.png'
import instagram from '../../assets/img/instagram.png'


const Contact = () => {

  const imprimir = () => {
    window.print()
  }
  return (
    <>
      <section className="contact-container" id="contact">
        <div className='contact-title'>
          <h2>Contact</h2>
          <p>Contácteme si quieres que trabajemos juntos.</p>
        </div>
        <article className="contact-link">
          <div className="contact-item">
            <a href="mailto:ktorrescolan@gmail.com">
              <img src={gmail} alt="Gmail"/>
            </a>
          </div>
          <div className="contact-item">
            <a href="https://github.com/Kevintc0495" target="_blank">
              <img src={gitHub} alt="Git Hub"/>
            </a>
          </div>
          <div className="contact-item">
            <a href="https://www.linkedin.com/in/kevin-torres-colan/" target="_blank">
              <img src={linkedin} alt="Linkedin"/>
            </a>
          </div>
          <div className="contact-item">
            <a href="https://www.instagram.com/torrescolan/?hl=es-la" target="_blank">
              <img src={instagram} alt="Instagram"/>
            </a>
          </div>
        </article>
        <button onClick={imprimir}>imprimir</button>
      </section>
    </>
  );
};

export default Contact;
