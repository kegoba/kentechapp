import React from 'react';
import './App.css';
import { connect}  from "react-redux"
import {  Routes, Route } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import {NotificationContainer} from 'react-notifications';
// self import

import Footer from "./components/statics/footer"

import Navbar from "./components/statics/Navbar"




function App() {

  //document.body.style="background-color:black"
  return (
    <div className="App">
    
       <Navbar />
      
      

    <div className='center'>
    <Footer/>
    </div>
    
  

  
  </div>
     

    
  );
}

export default App;
