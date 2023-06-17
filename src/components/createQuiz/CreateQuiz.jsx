import React, { useContext, useState } from 'react';
import "./CreateQuiz.css";
import Notification from "../../assests/Notification.png"
import Wallet from "../../assests/Wallet.png"
import Menu from "../../assests/Menu.png"
import { Course, Subject, Topic, Amount } from './Utils';
import Instruction from './Utils/Instruction';
import Question from './Utils/Question';
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
const QuizForm = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  const [ flow, setFlow ] =  useState({course:false,subject:false,topic:false,amount:false,instruction:false,questions:false});
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
    if(!flow.amount){
      setcurrentFlow('amount')
      return;
    };
    if(!flow.instruction){
      setcurrentFlow('instruction')
      return; 
    };
    if(!flow.questions){
      setcurrentFlow('questions')
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
  if(currentFlow==="instruction"){
    return (
      <div className='quiz'>
      <SubNav/>
      <div className="popupForm">
        <Instruction  update={updateFlow} next={next}/>
      </div>
    </div>
    )
  }
  if(currentFlow==="questions"){
    return (
      <div className='quiz'>
      <SubNav/>
      <div className="popupForm">
        <Question update={updateFlow}  next={next}/>
      </div>
    </div>
    )
  }

  return (
    <div className='quiz'>
      <SubNav/>
      <div className="QuizForm">

        <div className="left">
          <h1>QUIZ CREATION {currentFlow}</h1>
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
        { currentFlow==="amount" && <Amount  update={updateFlow} next={next} />}
        
      </div>

    </div>
  );
};

export default QuizForm;
