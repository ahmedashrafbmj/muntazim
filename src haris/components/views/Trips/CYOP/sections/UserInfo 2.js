import React from 'react'

import classes from './UserInfo2.module.css'
const FormDetails = [
    {label:"Destination", type:"text"},
    {label:"Guest House", type:"text"},
    {label:"Departure", type:"text"},
    {label:"Extra Options", type:"checkbox"},
]
const UserInfo2 = (props) => {
    const isTransport = props.isTransport;
    const setIsTransport = props.setIsTransport;

    const Transporthandler = (event)=>{

        setIsTransport(event.target.checked)
    }
  return (
        <div className={classes.width}>
            <div className='d-flex flex-wrap mx-2 align-items-center justify-content-center' style={{rowGap:"20px", columnGap:"15px"}}>
                {
                    FormDetails.map((item)=>(
                        <>
                        <div className={`${classes.inputGroup} `}>
                            <label>{item.label}</label>
                            <input type={item.type}/>
                            <input type={item.type}/>
                           
                        </div>
                        </>
                    ))
                }
            </div>
        </div>
  )
}

export default UserInfo2