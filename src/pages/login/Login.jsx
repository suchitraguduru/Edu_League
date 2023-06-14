import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import img from "../../assests/img.png";
import apple from "../../assests/apple.png"
import fb from "../../assests/fb.png";
import google from "../../assests/google.png"
import guest from "../../assests/guest.png";

const Login = () => {
  const navigate = useNavigate();
  return (
   <>
    <div className="login">
      <div className="container">
        <div className="left">
        <div className="up">
          <div className="back">{"<"}</div>
          <span>Home</span>
          <div className="forward">{">"}</div>
          <span>Sign Up</span>
        </div>
        <div className="bottom">
          <h1>Welcome Back!</h1>
          <p>Sign up or Login to play the quiz league</p>
        <img src={img} alt="" />
        </div>

        </div>

        <div className="right">
        <form>
        <p className='topPara'>Don't have an account? <span>Create</span></p>
          <div className="inputField">
            <label>Email/Phone no</label>
            <input type='text' name="email"/>
          </div>
          <div className="inputField">
            <label>Password</label>
            <input type='text' name="password"/>
          </div>
          <div className="forgot">
            <span>Remember me</span>
            <span>Forgot password?</span>
          </div>
          <button type='submit'>Login</button>
        </form>
      <div className="bottom">
      <span>Or</span>
        <span>Sign in with</span>
        <div className="social">
          <img src={ apple} alt="" />
          <img src={ google} alt="" />
          <img src={fb} alt="" />
          <img src={guest} alt="" />
        </div>
      </div>
      </div>
      </div>
    </div>
   </>
  )
}

export default Login