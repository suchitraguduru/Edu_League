import React, { useContext, useState } from 'react';
import "./CreateQuiz.css";
import Notification from "../../assests/Notification.png"
import Wallet from "../../assests/Wallet.png"
import Menu from "../../assests/Menu.png"
import { Course, Subject, Topic } from './Utils';

const SubNav = () => {
  return(
    <div className='subNav'>
      <div className="up">
        <div className="back">{"<"}</div>
        <span>Home</span>
        <div className="forward">{">"}</div>
        <span>Create Quiz</span>
      </div>
      <div className='right'>
        <div className='items'>
          <div className='notification'>
            <img src={Notification} alt=""/>
          </div>
          <div className='money'>
            <b>1000</b>
            <img src={Wallet} alt=""/>
          </div>   
        </div>
        <div className='items'>
        <img src={Menu} alt=""/>
        </div>
      </div>
    </div>
    

  )
}
const Background = () => {
  return (
    <div className='background'>
      <div className='topright'></div>
      <div className='bottomright'></div>
      <div className='bottomright'></div>


    </div>
  )
}
const QuizForm = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  const [ flow, setFlow ] =  useState({course:false,subject:false,topic:false});
  const [ currentFlow, setcurrentFlow ] = useState('course');
  const updateFlow = (field)=>{
    setFlow((updatedFlow)=>{
      return {
        ...flow,
        [field]:true,
      }
    })
  }
  const next = ()=>{
    if(!flow.course){
      setcurrentFlow('course')
      return;
    }
    if(!flow.subject) {
      setcurrentFlow('subject')
      return;
    };
    if(!flow.topic){
      setcurrentFlow('topic')
      return;
    };
  }
  const updateCourseFlow = ()=>{
    setcurrentFlow('course');
  }
  const updateSubjectFlow = ()=>{
    if(!flow.course) return;
    setcurrentFlow('subject');
  }
  const updateTopicFlow = ()=>{
    if(!flow.subject) return;
    setcurrentFlow('topic');
  }

  return (
    <div className='quiz'>
      <SubNav/>
      <div className="QuizForm">

        <div className="left">
          <h1>QUIZ CREATION</h1>
          <p>Allow users to create<br/>
          quizzes with multiple choice questions<br/>
           and choose topics they want</p>
          <div className="box">
            <button 
              className={currentFlow==="course"?'btn border':"btn"} 
              onClick={updateCourseFlow}>Choose a Course
            </button>
          </div>
          <div className="box">
            <button 
              className={currentFlow==="subject"?'btn border':"btn"} 
              onClick={updateSubjectFlow}>Choose a Subject
            </button>
          </div>
          <div className="box">
            <button 
              className={currentFlow==="topic"?'btn border':"btn"} 
              onClick={updateTopicFlow}>Choose a Topic
            </button>
          </div>
        </div>
        { currentFlow==="course" && <Course  update={updateFlow} next={next} />}
        { currentFlow==="subject" && <Subject update={updateFlow} next={next} />}
        { currentFlow==="topic" && <Topic update={updateFlow} next={next} />}

  
        {/* <div className="right">
          <div className="content">
          <div className="amountBox">
              <div className="amount">
                <div className="operator" onClick={handleDecrement}>-</div>
                <span>{entryCoins}</span>
                <div className="operator" onClick={handleIncrement}>+</div>
              </div>
              <p>If you put Rs10, get 10+6=Rs16</p>
            </div>
            <div className="note">
              <h3>Note</h3>
              <ul>
                <li>Choose your topic to create the quiz</li>
                <li>Read the instruction and play</li>
                <li>After completing quiz the quiz is taken by other player</li>
                <li>The one complete quiz with highest score would win</li>
              </ul>
            </div>
            

          </div>

          <button>Create Quiz</button>

        </div> */}
      </div>

    </div>
  );
};

export default QuizForm;
