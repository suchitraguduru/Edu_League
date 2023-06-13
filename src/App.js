import React from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
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
        </Routes>
        <Footer/>
      </Router>
      

      
     
      {/* {profile ? <Profile email ={email} updateProfile={updateProfile}/>:<Register updateEmail={updateEmail} updateProfile={updateProfile}/>} */}
    </div>
  );
}

export default App;
