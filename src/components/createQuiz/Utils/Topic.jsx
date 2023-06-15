import React from 'react';

const Topic = (props) => {
  const { update, next } = props;

  return (
    <div className='right'>
    <div className='top'>
      <h2>Choose a Topic</h2>
    </div>
    <div className='topicMiddle'>
      <div className='each'>Chapter1: The Fundamental Unit of Life</div>
      <div className='each'>Chapter2: Tissues</div>
      <div className='each'>Chapter3: Diversity in Living Organisms</div>
      <div className='each'>Chapter4: Why do We Fall ill</div>
      <div className='each'>Chapter5: Natural Resources</div>
      <div className='each'>Chapter6: Improvement in Food Resources</div>
    </div>
    <div className='down'>
      <button>Skip</button>
      <button onClick={next}>Next</button>
    </div>
</div>
  )
}

export default Topic