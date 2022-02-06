import React, { useEffect } from 'react';
import './payTable.scss';

const PayTable = () => {
  let table = JSON.parse(localStorage.getItem("table"));


  useEffect(() => {

  }, []);
  

  return (
    <>
      { table && <section className="pay-table-container" >
          <div className='pay-table-period'>
            <h3>{ table.period }</h3>
            <h3>{ table.ruc }</h3>
          </div>
          <table className='pay-table'>
            <thead>
              <tr>
                <th>Ingreso Bruto</th>
                <th>Compras</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S/{ table.bruto }</td>
                <td>S/{ table.shopping }</td>
                <td>S/20</td>
              </tr>
            </tbody>
          </table>
        </section>}
    </>
  );
};

export default PayTable;
