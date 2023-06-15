import React from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import CreateQuiz from './components/createQuiz/CreateQuiz';
import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
function App() {
  const [profile,setProfile] = useState(false);
  const [email, setEmail] = useState("");
  const updateEmail = (value)=>{
    setEmail(value);
  }
  const updateProfile = (value)=>{
    setProfile(value);
  }
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/createquiz' element={<CreateQuiz/>}/>
        </Routes>
        <Footer/>
      </Router>
      

      
     
      {/* {profile ? <Profile email ={email} updateProfile={updateProfile}/>:<Register updateEmail={updateEmail} updateProfile={updateProfile}/>} */}
    </div>
  );
}

export default App;
