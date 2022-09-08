import React from 'react'

import WrapperRadius from '../../UI/WrapperRadius'
import classes from './FormStep.module.css'

const FormStep = (props) => {
  return (
    <>
        <h2 className={`text-center py-2 ${classes.heading}`}>{props.heading[0]}<span> {props.heading[1]}</span></h2>
        <WrapperRadius className={`mx-md-2 ${classes.formContainer}`}>
              
              <div className='d-flex flex-wrap justify-content-center align-items-end' style={{rowGap:"10px"}}>
                <div className={classes.inputGroup}>
                  {props.children}
                </div>
                <button className={`mt-sm-0 mt-2 ms-1 ${classes.btn}`} onClick={props.onClick}>Next</button>
              </div>
        </WrapperRadius>
    </>
  )
}

export default FormStep;