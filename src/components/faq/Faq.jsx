import React from 'react';
import "./faq.css";
import faq from "../../assests/faq.png";

const Faq = (props) => {
  const {id} = props;
  return (
    <section id={id}>
      <div className="faq">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <div className="bottom">
            <div className="left">
                <div className="ques">
                    <p>How can I play quizzes on the app?</p>
                    <span>+</span>
                </div>
                <div className="ques">
                    <p>How can I play quizzes on the app?</p>
                    <span>+</span>
                </div>
                <div className="ques">
                    <p>How can I play quizzes on the app?</p>
                    <span>+</span>
                </div>
                <div className="ques">
                    <p>How can I play quizzes on the app?</p>
                    <span>+</span>
                </div>
                <div className="ques">
                    <p>How can I play quizzes on the app?</p>
                    <span>+</span>
                </div>
                <div className="ques">
                    <p>How can I play quizzes on the app?</p>
                    <span>+</span>
                </div>
            </div>
            <div className="right">
                <img src={faq} alt="" />
            </div>

        </div>
    </div>
    </section>
  )
}

export default Faq