import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "./NavBar.css";
import logo from "../../assests/logo.png"
export default function NavBar() {
  return (
    <div className="nav">
      <div className="left">
        <img src={logo} alt="" />
      </div>
      <div className="right">
        <ul>
        <li>
          <NavLink to="/" ><span>Home</span></NavLink>
        </li>
        <li>
          <a href="/#quizcreate" ><span>Create quiz</span></a>
        </li>
        <li>
        <a href="#joinquiz" ><span>Join quiz</span></a>
        </li>
        <li>
        <a href="#quizseries"><span>Quiz Series</span></a>
        </li>
        <li>
        <a href="#quizapp" ><span>About us</span></a>
        </li>
        <li>
        <a href="#faq" ><span>FAQ</span></a>
        </li>
        <li className='btn'>
        <NavLink to="/login" >Login</NavLink>
        </li>
        <li className='btn'>
        <NavLink to="/signup" >Sign Up</NavLink>
        </li>
      </ul>
      </div>
      
    </div>
  );
}
