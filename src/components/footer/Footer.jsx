import React from 'react';
import "./footer.css";
import ios from "../../assests/ios.svg"
import gplay from "../../assests/gplay.svg"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="left">
          <div className="heading">
          <span className="subheading">Quick Links</span>
          <span>Create quiz</span>
            <span>Join Quiz</span>
            <span>Quiz Series</span>
          </div>
          <div className="heading">
          <span className="subheading">EduLeague</span>
           <span>About Us</span>
           <span>Privacy policy</span>
           <span>Terms and Conditions</span>
          </div>
          </div>
          <div className="right">
          <div className="subscribe">
            <input type="text" placeholder='Enter Your Email' />
            <button>Subscribe</button>
          </div>
          <span>Download our app</span>
          <div className="social">
            <img src={ios} alt="" />
            <img src={gplay} alt="" />
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer