import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../login/login.css";
import img from "../../assests/img.png";



const Register = () => {
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
        <div className="inputField">
          <label>First Name</label>
          <input type='text' name="fname"/>
        </div>
         <div className="inputField">
          <label>Last Name</label>
          <input type='text' name="lname" />
        </div>
        <div className="inputField">
          <label>Email Address</label>
          <input type='text' name="email"/>
        </div>
        <div className="inputField">
          <label>Password</label>
          <input type='text' name="password"/>
        </div>
        <div className="inputField">
          <label>Confirm Password</label>
          <input type='text' name="cpassword"/>
        </div>
        <button type='submit'>Sign Up</button>
        <p className='bottomPara'>Already have an account? <span>Login</span></p>
      </form>
      </div>
    </div>
    </div>
   </>
  )
}

export default Register