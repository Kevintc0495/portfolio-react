import React, { useState } from 'react';
import './title.scss'

const Title = (props) => {
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

  const valor = (props) => {
    props.objeto.title = "hola";
    
    console.log(props.objeto);
  }
  
  const addText = (e, props) => {

    if(e.keyCode == 13) {
      setText(e.target.value);
      setInput(false);
      setValidation(true);
      // valor(props);
      props.objeto.title = e.target.value;
      console.log(props.objeto);
    };
  }
  
  return (
    <>
      <section className='title-container' id='title'>
        <div className='title'>
          <h2>Titulo</h2>
          <button className='add-btn' onClick={addInput}><i className="gg-add-r"></i></button>
          { input && 
          <button className='close-btn' onClick={closeInput}><i className="gg-remove-r"></i></button>}
          { validation && 
          <button className='remove-btn' onClick={removeText}>X</button>}
        </div>
        { input && 
        <div className='title-input'>
          <input onKeyUp={(e) => addText(e, props)} type="text" placeholder='Escribe el titulo'/>
        </div>}
        { validation && 
        <article className='title-description'>
          <span>{text}</span> 
        </article>}
      </section>
    </>
  );
};

export default Title;
