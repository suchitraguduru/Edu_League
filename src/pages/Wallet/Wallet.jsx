import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./wallet.css";

const Wallet = () => {
  const navigate = useNavigate();
  return (
   <>
    <div className='wallet'>
      <div className='sidebar'></div>
      <div className='container'>
        <div className='left'></div>
        <div className='right'></div>
      </div>

    </div>
   </>
  )
}

export default Wallet