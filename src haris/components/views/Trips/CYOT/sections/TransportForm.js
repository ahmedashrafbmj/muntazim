import classes from './FormCYOT.module.css'

import React from 'react'
import FormStep from './FormStep';
import Select from '../../UI/Select';



const TransportForm = (props) => {
    const formNo = props.transportFormNo;
    const setFormNo = props.setTransportFormNo;
    const transportForm = props.transportForm;
    const formName = transportForm[formNo]

    const nextStepHandler = ()=>{
        setFormNo((formNo< transportForm.length) ? formNo+1: formNo)
    }
    const selectCar = (
        <div className='d-flex flex-wrap align-items-center justify-content-center px-2'>
            <div className='px-1'>
                <label>Type of Car</label>
                <Select options={["SEDAN",]}/>
            </div>
            <div className='px-1'>
                <label>Car</label>
                <Select options={["Corolla", "Honda"]}/>
            </div>
        </div>
    )
    const typeofCar=(
    <>
    <div className='text-center'>
    <label>Auto or Manual?</label>
    <div className='d-flex flex-wrap align-items-center justify-content-center px-2'>
        
        <div className={`d-flex align-items-center ${classes.radio} px-2`}>
            <input id={classes["box-shadow"]} type="radio"  name="carType"  />
            <label className='pt-1'>Auto</label>
        </div>
        <div className={`d-flex align-items-center ${classes.radio} px-2`}>
            <input id={classes["box-shadow"]} type="radio"  name="carType"  />
            <label className='pt-1'>Manual</label>
        </div>
    </div>
    </div>
    </>
    )
    
    const bookACar = (
        <div className='d-flex flex-wrap align-items-center justify-content-center px-2'>
        <div className='px-1'>
            <label>Year</label>
            <Select options={["1999", "2000"]}/>
        </div>
        <div className='px-2'>
            <label>Car</label>
            <div className='d-flex'>
            <div className={`d-flex align-items-center ${classes.radio} px-2`}>
                <input id={classes["box-shadow"]} type="radio"  name="carType"  />
                <label className='pt-1'>Yes</label>
            </div>
            <div className={`d-flex align-items-center ${classes.radio} px-2`}>
                <input id={classes["box-shadow"]} type="radio"  name="carType"  />
                <label className='pt-1'>No</label>
            </div>
            </div>
        </div>
    </div>
    )
  return (
    <>
    <FormStep onClick={nextStepHandler} heading={["Book a:", "Vehicle"]} >
            {formName==="Select a Car" && selectCar}
            {formName==="Type of Car" && typeofCar }
            {formName==="Book a Car" && bookACar}
    </FormStep>
    <div className=' mb-2 mt-3 mx-1 d-flex justify-content-center align-items-center px-2'>
            {
            transportForm.map((item, i)=>(
                    formNo === i  ? (<div className={classes.progressText} key={i}>{item}</div>):
                    (i)< formNo? (<div className={classes.prevDot} key={i}></div>)
                                : (<div className={classes.progressDot} key={i}></div>)
                ))
            }
    </div>
    
    </>
  )
}

export default TransportForm