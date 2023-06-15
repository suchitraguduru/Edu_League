import React, { useState } from 'react';
import Biology from "../../../assests/Biology.png";
import Chemistry from "../../../assests/Chemistry.png"
import Physics from "../../../assests/Physics.png"
import Maths from "../../../assests/Maths.png"
const Subject = (props) => {
  const { update, next } = props;

  const [ subject, setSubject ] = useState('');
  const updateSubject = (newSubject)=>{
    setSubject(newSubject);
    update('subject');
  }
  return (
    <div className='right'>
      <div className='top'>
        <h2>Choose a Subject</h2>
      </div>
      <div className='middle'>
        <div className={subject==="maths"?'box  border':'box '}  onClick={(e)=>updateSubject("maths")}>
          <img src={Maths} className='image' alt="" />
          <p>Maths</p>
        </div>
        <div className={subject==="bio"?'box border':'box  '}   onClick={(e)=>updateSubject("bio")}>
        <img src={Biology} className='image' alt="" />
        <p>Biology</p>
        </div>
        <div className={subject==="chemistry"?'box border':'box  '}   onClick={(e)=>updateSubject("chemistry")}>
        <img src={Chemistry} className='image' alt="" />
        <p>Chemistry</p>
        </div>
        <div className={subject==="physics"?'box border':'box  '}   onClick={(e)=>updateSubject("physics")}>
        <img src={Physics} className='image' alt="" />
        <p>Physics</p>
        </div>
      </div>
      <div className='down'>
        <button>Skip</button>
        <button onClick={next}>Next</button>
      </div>
  </div>
  )
}

export default Subject