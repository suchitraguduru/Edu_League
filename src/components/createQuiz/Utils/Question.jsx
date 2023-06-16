import React, { useContext, useState } from 'react';
import './Question.css'
const Question = () => {
  return(
    <div className='question'>
      <div className='head'>
      <div className='btn'>Biology</div>
      </div>
      <div className='top'>
        <div className='text'>
          <p>Question 1/10</p>
          <p>10:00</p>
        </div>
        <div className='progress'>
          <div className='full'>

          </div>
          <div className='current'>

          </div>
        </div>
      </div>
      <div className='middle'>
        <h4>1. Lysosomes are called suicide bags because</h4>
        <ul>
          <li>A. It causes the cell to break its cell membrane, causing death</li>
          <li>B. It kills the surrounding cells by releasing enzymes</li>
          <li>C. The enzymes are capable of digesting cells</li>
          <li>D. All of the above</li>
        </ul>
      </div>
      <div className='bottom'>
          <button>Skip</button>
          <button>Next</button>
      </div>
    </div>
  )
}
export default Question