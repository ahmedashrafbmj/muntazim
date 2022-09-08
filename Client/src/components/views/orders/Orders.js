import React, { useState } from "react";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import './Orders.css';
import TextField from '@mui/material/TextField';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Calender from "./Calender";

 



function Orders(){
    const now1 = "light";
    const status = "50% comletes";
    const now3 = "waiters";
    const now4 = "Something";
    const now2 = 60;
    const [calender,Setcalender]= useState(false)

    const  Handle=(e)=>{
     Setcalender(true)
    }

    return(
        <div>
            <div id="heading">
                <h1>Order By Maythe4th</h1>
               

            </div>
           <div id="icons">
            <div>
                <div id="childs">
         <p><AccessTimeFilledIcon/></p> 
         <p id="para"> <span className="clrchg">Start On</span> <br/><span className="date">25-8-2022</span></p> 
         
          </div>
          </div>
            <div>
            <div id="childs">
         <p><AccessTimeFilledIcon/></p> 
         <p id="para"> <span className="clrchg">Due On</span> <br/><span className="date">25-8-2022</span></p> 
         
          </div>
          </div>
            <div>
            <div id="childs">
         <p><CurrencyBitcoinIcon/></p> 
         <p id="para"> <span className="clrchg">Budget</span> <br/><span className="date">80000 pkr</span></p> 
         
          </div>
          </div>
           </div>

           <div id="sections">
            <div id="frstsec">
                 <p className="para">Maythe4th</p>
                 <div className="flexone">
                    <p style={{marginLeft:"10px"}} className="para2">lights</p>
                    <p style={{marginLeft:"10px"}}className="para2">200x</p>
                 </div>
                 <div className="flexone">
                    <p style={{marginLeft:"10px"}}className="para2">lights</p>
                    <p style={{marginLeft:"10px"}}className="para2">200x</p>
                 </div>
                 <div className="flexone">
                    <p style={{marginLeft:"10px"}}className="para2">lights</p>
                    <p  style={{marginLeft:"10px"}}className="para2">200x</p>
                 </div>
                 <div className="flexone">
                    <p style={{marginLeft:"10px"}}className="para2">lights</p>
                    <p style={{marginLeft:"10px"}}className="para2">200x</p>
                 </div>
                 <div className="flexone">
                    <p style={{marginLeft:"10px"}}className="para2">lights</p>
                    <p style={{marginLeft:"10px"}}className="para2">200x</p>
                 </div>
            </div>
            <div id="Secsec">
                 <p className="para">Maythe4th</p>
                 <p style={{color:"gray",marginLeft:"10px"}}>change a number of waiters from 20 to 50 <br/>from 20 to 50</p>
                 <p style={{color:"gray",marginLeft:"10px"}}>change a number of waiters from 20 to 50 <br/>from 20 to 50</p>
            </div>
           </div>
           <div id="progress">

           <TextField style={{marginLeft:"70px"}} placeholder="progress/Checl-List" id="standard-basic" className="biginp" variant="standard" />
 

           <ProgressBar className="bar" now={now2} label={`${status}`} />
           <ProgressBar className="bar" now={now2} label={`${now1}%`} />
           <ProgressBar className="bar"  now={now2} label={`${now3}%`} />
           <ProgressBar style={{marginbottom:"50px"}} className="bar" now={now2} label={`${now4}%`} />
           {/* <ProgressBar className="bar" now={now2} label={`${now}%`} /> */}



           </div>
         
        </div>
    )
}
export default Orders