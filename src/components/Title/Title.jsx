import React from 'react';
import './title.scss'

const Title = () => {
  return (
    <>
      <section className='title-container'>
        <div className='title'>
          <h2>Titulo</h2>
        </div>
        <article className='title-description'>
          <span>Presupuesto de luces de emergencia</span> 
        </article>
      </section>
    </>
  );
};

export default Title;
