import React, { useState } from 'react';
import './description.scss'

const Description = (props) => {
  const [input, setInput] = useState(false);
  const [validation, setValidation] = useState(false);
  const [text, setText] = useState(null);
  
  const addInput = () => {
    setInput(true);
  }

  const closeInput = () => {
    setInput(false);
  }
  
  const removeText = () => {
    setText('');
    setValidation(false);
  }
  
  const addText = (e, props) => {

    if(e.keyCode == 13) {
      setText(e.target.value);
      setInput(false);
      setValidation(true);
      props.objeto.description = e.target.value;
      console.log(props.objeto);
    };
  }

  return (
    <>
      <section className='description-container'>
        <div className='description-title'>
          <h2>Descripción</h2>
          <button className='add-btn' onClick={addInput}><i className="gg-add-r"></i></button>
          { input && 
          <button className='close-btn' onClick={closeInput}><i className="gg-remove-r"></i></button>}
          { validation && 
          <button className='remove-btn' onClick={removeText}>X</button>}
        </div>
        { input && 
        <div className='description-input'>
          <textarea onKeyUp={(e) => addText(e, props)} name="" id="" cols="40" rows="5" placeholder='Escriba la descripción'></textarea>
        </div>}
        { validation && 
        <article className='description'>
          <span>{text}</span> 
        </article>}
      </section>
    </>
  );
};

export default Description;
