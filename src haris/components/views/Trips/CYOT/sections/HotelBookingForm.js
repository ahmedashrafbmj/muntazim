import React from 'react'
import classes from './FormCYOT.module.css'
import Input from '../../UI/Input'
import Select from '../../UI/Select';

import FormStep from './FormStep';

const HotelBookingForm = (props) => {

    const formNo = props.hotelFormNo;
    const setFormNo = props.setHotelFormNo
    const hotelForm = props.hotelForm;
    const form = hotelForm[formNo]
    const isTransport = props.isTransport;
    const setIsTransport = props.setIsTransport;

    const NextFormHandler = ()=>{
        setFormNo(formNo< hotelForm.length ? formNo+1:formNo)
    }
    const Transporthandler = (event)=>{

        setIsTransport(event.target.checked)
    }
    const hotelDetailsForm = (
        <FormStep onClick={NextFormHandler} heading={["Location:", "Muree"]} >
        <div className='d-flex flex-wrap align-items-center justify-content-center px-2'>
            <div className='px-1'>
                <label>How long will you stay here?</label>
                <Input type="number" className={classes.inputPinkCenter} rightText="Pkr" />
            </div>
            <div className='px-1'>
                <label>No. of rooms?</label>
                <Input type="number" className={classes.inputPinkCenter} rightText="Pkr" />
            </div>
            <div className='px-1'>
                <label>No of Beds?</label>
                <Input type="text" className={classes.inputPinkCenter} iconRightClassName="fa-solid fa-caret-up" />
            </div>
            <div className='px-1'>
                <label>Type of Bed?</label>
                <Select options={["Single", "Double"]}/>
                {/* <Input type="text" className={classes.inputPinkCenter} placeHolder="Single or Double" /> */}
            </div>
        </div>
    </FormStep>
    )
    const ExtrasForm = (
        <FormStep onClick={NextFormHandler} heading={["Choose your", "Extra"]}>
            <div className={classes.inputGroup}>
            <label>Would you like any extras?</label>
                <div >
                    <input type="checkbox"/>
                    <label> Band-aid Kit</label>
                </div>
                <div>
                    <input type="checkbox"  value={isTransport} onChange={Transporthandler}/>
                    <label>Transport</label>
                </div>
            </div>
        </FormStep>
    )
  return (
    <>
        {form==="Hotel" && hotelDetailsForm}
        {form==="Extras" && ExtrasForm}
        {
        formNo<hotelForm.length &&(
        <div className=' mb-2 mt-3 mx-1 d-flex justify-content-center align-items-center px-2'>
            {
            hotelForm.map((item, i)=>(
                    formNo === i  ? (<div className={classes.progressText} key={i}>{item}</div>):
                    (i)< formNo? (<div className={classes.prevDot} key={i}></div>)
                                : (<div className={classes.progressDot} key={i}></div>)
                ))
            }
        </div>
        )
        }

    </>
  )
}

export default HotelBookingForm;