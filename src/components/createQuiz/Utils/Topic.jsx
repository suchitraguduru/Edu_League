import React, { useState } from 'react';

const Topic = (props) => {

  const [ selectedtopic , setSelectedTopic ] = useState('');
  const updateTopic = (newTopic)=>{
    update('topic');
    setSelectedTopic(newTopic);
  }
  const { update, next } = props;

  const gonext  = ()=>{
    next();
  }
  return (
    <div className='right'>
    <div className='top'>
      <h2>Choose a Topic</h2>
    </div>
    <div className='topicMiddle'>
      <div className='each'onClick={()=>updateTopic('The Fundamental Unit of Life')}>Chapter1: The Fundamental Unit of Life</div>
      <div className='each'onClick={()=>updateTopic('Tissues')}>Chapter2: Tissues</div>
      <div className='each'onClick={()=>updateTopic('Diversity in Living Organisms')}>Chapter3: Diversity in Living Organisms</div>
      <div className='each'onClick={()=>updateTopic('Why do We Fall ill')}>Chapter4: Why do We Fall ill</div>
      <div className='each'onClick={()=>updateTopic('Natural Resources')}>Chapter5: Natural Resources</div>
      <div className='each'onClick={()=>updateTopic('Improvement in Food Resources')}>Chapter6: Improvement in Food Resources</div>
    </div>
    <div className='down'>
      <button>Skip</button>
      <button onClick={gonext}>Next</button>
    </div>
</div>
  )
}

export default Topic