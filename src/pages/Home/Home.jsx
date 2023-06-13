import React, { useState } from "react";
import "./Home.css";
import Advantages from '../../components/advantages/Advantages';
import background from "../../assests/background.png";
import bannerimg from "../../assests/bannerimg.png";
import createquizimg from "../../assests/createquizimg.png";
import joinquiz from "../../assests/joinquiz.png";
import examBro from "../../assests/exambro.png";
import QuizApp from "../../components/quizApp/QuizApp";
import Faq from "../../components/faq/Faq"
export default function Home() {
  return (
    <div className="home">
      <section className="banner">
        <img className="bgImage" src={background} alt=""/>
        <div className="container">
          <div className="left">
              <h1>Boost your brainpower and your <span>wallet</span></h1>
              <p>Join our league and turn your knowledge into rewards!</p>
              <button>Get Started</button>
          </div>
          <div className="right">
              <img src={bannerimg} alt="" />
          </div>
        </div>
      </section>
      <section className="quizCreate">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L80,128C160,128,320,128,480,112C640,96,800,64,960,64C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
          <div className="container">
            <img src={createquizimg} alt="" />
            <div className="content">
              <h1>QUIZ CREATION</h1>
              <p>Allow users to create <br/>quizzes with multiple choice questions and choose <br /> topics they want</p>
              <button>Create Quiz</button>
            </div>
          </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L80,128C160,128,320,128,480,112C640,96,800,64,960,64C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </section>
      <section className="joinQuiz">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L80,128C160,128,320,128,480,112C640,96,800,64,960,64C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        <div className="container">
          <div className="content">
            <h1>JOIN QUIZ</h1>
            <p>Join quiz created by different users on different <br /> topics and earn cash prizes</p>
            <button>Join Quiz</button>
          </div>
          <img src={joinquiz} alt="" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L80,128C160,128,320,128,480,112C640,96,800,64,960,64C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </section>
      <section className="quizSeries">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L80,128C160,128,320,128,480,112C640,96,800,64,960,64C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
          <div className="container">
            <img src={examBro} alt="" />
            <div className="content">
              <h1>QUIZ SERIES</h1>
              <p>allows students to practice different quizzes and test their knowledge on various topics. This feature provides an interactive way for students to review what they've learned and reinforce important concepts.</p>
              <button>Create Quiz</button>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L80,128C160,128,320,128,480,112C640,96,800,64,960,64C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </section>
      <Advantages/>
      <QuizApp/>
      <Faq/>
    </div>
  );
}
