import React, { useState } from 'react';

const Course = (props) => {
  const { update, next } = props;

  const [ course, setCourse ] = useState('');
  const updatecourse = (newCourse)=>{
    setCourse(newCourse);
    update('course');
  }
  return (
      <div className='right'>
          <div className='top'>
            <h2>Choose a Course</h2>
          </div>
          <div className='middle'>
          <div className={course==="9"?'box ft-10 border':'box ft-10 '}  onClick={(e)=>updatecourse("9")}>
          9th
        </div>
        <div className={course==="10"?'box ft-10 border':'box ft-10 '}   onClick={(e)=>updatecourse("10")}>10th</div>
        <div className={course==="IBPS"?'box border':'box  '}   onClick={(e)=>updatecourse("IBPS")}>IBPS</div>
          </div>
          <div className='down'>
            <button>Skip</button>
            <button onClick={next}>Next</button>
          </div>
      </div>
  )
}

export default Course