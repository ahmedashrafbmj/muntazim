import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Orders.css';


function Calender(){
    const [value, onChange] = useState(new Date());
    return(
        <>
                <div style={{marginRight:"60px",marginTop:"0px",border:"none"}}>
                  <Calendar  value={value} style={{with:"40%",backgroundColor:"red",border:"none"}}  />
                  </div>
        </>
    )

}
export default Calender