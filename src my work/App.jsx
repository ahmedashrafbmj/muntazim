import logo from './logo.svg';
// import './App.css';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
// import TextareaAutosize from '@mui/icons-material/TextareaAutosize';
// import Form from 'react-bootstrap/Form';
// import Contact from './components/view/contact';
import BidStatus from "./components/view/Bidstatus/bitStatus"
import DueStatus from './components/view/Due status/DueStatus';
import Calender from "./components/view/orders/Calender";
import Calendar123 from 'react-calendar';
import Faq from "./components/view/FAQ/Faq"
import Help from './components/view/help and support/Help';
import PaymentMethod from "./components/view/Payment Method/PaymentMethod"
import React, { useState } from "react";




function App() {
  const [calender,Setcalender]= useState()
  


  return (
    <>
    <PaymentMethod/>  
      </>
    
  );
}

export default App;
