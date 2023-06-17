import React, { useContext, useEffect, useState } from 'react';
import Clock from "../../../assests/Clock.png"
import Questions from "../../../assests/Questions.png"
import './Instruction.css'
const Instruction = (props) => {
  const { update, next} = props;
  useEffect(()=>{
    update('instruction');
  })
  return(
    
      <div className='popup'>
        <div className='top'>
          <div className='topLeft'>
            <div className='btn'>Course - Class 9th</div>
            <div className='btn'>Subject - Biology</div>
            <div className='btn'>Topic - Tissue</div>
          </div>
          <div className='topRight'>
            <p>Money you have put</p>
            <div className='ruppes'>Rs 20</div>
          </div>
        </div>
        <div className='icons'>
          <div className='item'>
            <img src={Questions} alt=""/>
            <p>10 Question</p>
          </div>
          <div className='item'>
            <img src={Clock} alt=""/>
            <p>5 Minutes</p>
          </div>
        </div>
        <div className='instruct'>
          <h2>Instructions</h2>
          <ul>
            <li>For every correct answer ,you will get +1 and for wrong ans -0.25</li>
            <li>You will appear the test first, then it would be taken by other person , the one with highest score with least time will win the quiz</li>
            <li>After the quiz you can analyse the test and challenge your friends</li>
            <li>You will win 60% of profit if you win.</li>

          </ul>
        </div>
        <div className='bottom'>
            <button>Skip</button>
            <button onClick={next}>Next</button>
        </div>
      </div>
  
  )
}
export default Instruction