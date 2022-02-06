import React, { useState } from 'react';
import NavBarPage from '../../components/NavBarPage/NavBarPage';
import Title from '../../components/Title/Title';
import Description from '../../components/Description/Description';
import Table from '../../components/Table/Table';

const Budget = () => {
  const presupuesto =
    {
      title: null,
      description: null
    }

  
  return (
    <>
      <NavBarPage objeto={presupuesto}/>
      <Title objeto={presupuesto}/>
      <Description objeto={presupuesto}/>
    </> 
  );
};

export default Budget;
