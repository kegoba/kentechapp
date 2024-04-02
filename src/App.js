import React from 'react';
import './App.css';
import { connect}  from "react-redux"
import {  Routes, Route } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import {NotificationContainer} from 'react-notifications';
// self import

import Footer from "./components/statics/footer"

import Navbar from "./components/statics/Navbar"
import Login from  "./components/authComponent/Login"
import Reg from "./components/authComponent/Reg";
import Home from "./components/home/Home"
import Cart from "./components/shopComponent/Cart"
import Addproduct from "./components/shopComponent/addproduct"
import Men from "./components/shopComponent/men"
import Women from "./components/shopComponent/women"
import Payment from "./components/paystackComponent/Payment"
import PayInput from "./components/paystackComponent/payInput"
import SuccessPage from "./components/paystackComponent/success"



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
