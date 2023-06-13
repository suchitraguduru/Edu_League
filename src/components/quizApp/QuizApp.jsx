 import React from 'react';
 import "./quizapp.css";
 import ios from "../../assests/ios.svg"
import gplay from "../../assests/gplay.svg"
import mobile from "../../assests/mobile.png"
 
 const QuizApp = () => {
   return (
     <>
        <div className="quizapp">
            <div className="container">
              <div className="left">
                <h1>Get our Quiz League App</h1>
                <p>Looking for a fun way to learn and challenge yourself? Download our quiz app today </p>
                <div className="bottom">
                  <img src={ios} alt="" />
                  <img src={gplay} alt="" />
                </div>
              </div>
              <div className="right">
                <img src={mobile} alt="" />
              </div>
            </div>
        </div>
     </>
   )
 }
 
 export default QuizApp