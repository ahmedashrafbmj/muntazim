import classes from './FormCYOT.module.css'

import FormStep from './FormStep';

import { useState } from 'react';
import FormInput from './FormInput';
import HotelBookingForm from './HotelBookingForm';
import TransportForm from './TransportForm';

const trips= [
    {id:0,formName:"Budget", formHeading:["Choose your","Budget"]},
    {id:1,formName:"Current Location",formHeading:["Choose your","Current Location"]},
    {id:2,formName:"Destination",formHeading:["Choose your","Destination"]},
    {id:3,formName:"Stay Dates", formHeading:["Choose your","stay dates"]},
    {id:4,formName:"Travellers", formHeading:["Choose the number of","travelers"]},
]
const hotelForm= ["Hotel", "Extras"]
const transportForm= ["Select a Car","Type of Car","Book a Car"]

const FormCYOT = ()=>{

    const [formNo, setformNo] = useState(trips[0].id);
    const [hotelFormNo, setHotelFormNo] = useState(0);
    const [transportFormNo, setTransportFormNo] = useState(0);
    const [isTransport, setIsTransport] = useState(false);

    const NextStep = ()=>{
        setformNo(formNo+1)
        
    }
    const values = (formNo<trips.length) && trips[formNo]
    return(
        <>
             
                {(formNo<trips.length) && (
                <>
                <FormStep onClick={NextStep} heading={values.formHeading} >
                    <FormInput Form={values.formName}/>
                </FormStep>
                <div className=' mb-2 mt-3 mx-1 d-flex justify-content-center align-items-center px-2'>
                    {

                        trips.map((item, i)=>(
                            item.formName === values.formName ? (<div className={classes.progressText} key={i}>{item.formName}</div>):
                            (formNo)>i ? (<div className={classes.prevDot} key={i}></div>)
                                        : (<div className={classes.progressDot} key={i}></div>)
                        ))
                    }
                </div>
                </>
                )
            }
                
            {(formNo>=trips.length) && <HotelBookingForm hotelForm={hotelForm} isTransport={isTransport} setIsTransport={setIsTransport} hotelFormNo={hotelFormNo} setHotelFormNo={setHotelFormNo}/>}
            {(hotelFormNo>=hotelForm.length && isTransport && transportFormNo< transportForm.length) && <TransportForm transportForm={transportForm} transportFormNo={transportFormNo} setTransportFormNo={setTransportFormNo}/>}
            {(hotelFormNo>=hotelForm.length && !isTransport) && <p className='text-center'>Submitted</p>}
            {(hotelFormNo>=hotelForm.length && transportFormNo>= transportForm.length) &&<p className='text-center'>Completed</p>}
                
        </>
            

    )
}

export default FormCYOT;


