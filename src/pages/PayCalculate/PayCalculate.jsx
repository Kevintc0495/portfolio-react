import React, { useState } from 'react';
import './payCalculate.scss';
import NavBarPage from '../../components/NavBarPage/NavBarPage';
import PayForm from '../../components/PayForm/PayForm';
import PayTable from '../../components/PayTable/PayTable';


const PayCalculate = () => {
  const [ ruc, setRuc ] = useState(null);
  const [ period, setPeriod ] = useState(null);
  const [ bruto, setBruto ] = useState(null);
  const [ shopping, setShopping ] = useState(null);
  const [ category, setCategory ] = useState(null);
  const [ table, setTable ] = useState([]);
  let id = 0;

  const handleChange = (e) => {
    switch (e.target.name) {
      case "ruc":
        setRuc(e.target.value);
        break;
      case "period":
        setPeriod(e.target.value);
        break;
      case "in-bruto":
        setBruto(e.target.value);
        break;
      case "shopping":
        setShopping(e.target.value);
        break;
      case "category":
        setCategory(e.target.value);
        break;
    
      default:
        break;
    }
  }

  const process = () => {
    console.log("Procesado");
    id += 1;
    let data = { id, ruc, period, bruto, shopping, category };
    setTable([data]);
    localStorage.setItem( "table", JSON.stringify(data) );
  }

  return (
    <>
      <NavBarPage/>
      <section className="pay-container">
        <PayForm process={ process } handleChange={ handleChange }/>
        <PayTable table={ table } />
      </section>
    </>
  );
};

export default PayCalculate;
