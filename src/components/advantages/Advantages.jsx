import React from 'react';
import "./advantages.css";
import left from "../../assests/left.png"
import right from "../../assests/right.png"

const Advantages = (props) => {
  const {id}=props;
  return (
  <section id={id}>
    <div className="advantages">
        <h1>EDU LEAGUE ADVANTAGES</h1>
        <div className="bottom">
            <div className="left">
                <div className="img">
                    <img src={left} alt="" />
                </div>
                <div className="text">
                    <h3>Reward System</h3>
                    <p>Offer users a rewards based on their performance in quizzes, such as points or cash rewards, which they can use to redeem rewards.</p>
                </div>
            </div>
            <div className="right">
                <div className="img">
                    <img src={right} alt="" />
                </div>
                <div className="text">
                    <h3>Analytics & Leader board</h3>
                    <p>Offer users a rewards based on their performance in quizzes, such as points or cash rewards, which they can use to redeem rewards.</p>
                </div>
            </div>

        </div>
    </div>
  </section>
  )
}

export default Advantages