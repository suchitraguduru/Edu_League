import React, { useState } from 'react';

const Amount = (props) => {
  const {  update,next } = props;

  const [ entryCoins, setEntryCoins ] = useState(20);
  const handleDecrement = ()=>{
    update('amount');
    setEntryCoins(entryCoins-1);
  }
  const handleIncrement = ()=>{
    update('amount');
    setEntryCoins(entryCoins+1);
  }
  return (
      <div className='right'>
          <div className='top'>
            <h2>Choose a desired amount</h2>
          </div>
          <div className='middle'>
            <div className="amountBox">
              <div className="amount">
                <div className='coin'>
                  <div className="operator" onClick={handleDecrement}>-</div>
                  <span>{entryCoins}</span>
                  <div className="operator" onClick={handleIncrement}>+</div>
                </div>
              </div>
            
              <div className='amount'>
                <p>*Note - If you put <b>Rs10</b>, you will get </p>
                <p><b>10+6=Rs16</b></p>
              </div>
              
            </div>
              
            
          </div>
          <div className='down'>
            <button>Skip</button>
            <button onClick={next}>Next</button>
          </div>
      </div>
  )
}

export default Amount