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
          <NavLink to="/home" ><span>Home</span></NavLink>
        </li>
        <li>
          <NavLink to="/createquiz" ><span>Create quiz</span></NavLink>
        </li>
        <li>
        <NavLink to="/joinquiz" ><span>Join quiz</span></NavLink>
        </li>
        <li>
        <NavLink to="/quizseries" ><span>Quiz Series</span></NavLink>
        </li>
        <li>
        <NavLink to="/aboutus" ><span>About us</span></NavLink>
        </li>
        <li>
        <NavLink to="/faq" ><span>FAQ</span></NavLink>
        </li>
        <li className='btn'>
        <NavLink to="/signup" >Sign Up</NavLink>
        </li>
      </ul>
      </div>
      
    </div>
  );
}
