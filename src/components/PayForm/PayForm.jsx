import React from 'react';
import './payForm.scss'

const PayForm = ({ process, handleChange }) => {
  return (
    <>
      <section className='pay-form-container'>
        <div className='pay-form-title'>
          <h2>Pago Sunat</h2>
        </div>
        <div className='pay-form-item'>
          <input onChange={ handleChange } type="tel" name="ruc" placeholder='Ingresa el N° de RUC'/>
        </div>
        <div className='pay-form-item'>
          <input onChange={ handleChange } type="month" name="period" placeholder='Periodo'/>
        </div>
        <div className='pay-form-item'>
          <input onChange={ handleChange } type="tel" name="in-bruto" placeholder='Ingreso bruto'/>
        </div>
        <div className='pay-form-item'>
          <input onChange={ handleChange } type="tel" name='shopping' placeholder='Compras'/>
        </div>
        <div className='pay-form-item'>
          <input onChange={ handleChange } type="text" name='category' placeholder='Categoria'/>
        </div>
        <div className="pay-form-btn">
          <button onClick={ process } >Procesar</button>
        </div>
      </section>
    </>
  );
};

export default PayForm;
