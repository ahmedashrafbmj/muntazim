import React from 'react'

import classes from './UserInfo.module.css'
const FormDetails = [
    {label:"First Name", type:"text"},
    {label:"Last Name", type:"text"},
    {label:"Number", type:"number"},
    {label:"Email Address", type:"email"},
]
const UserInfo = () => {
  return (
        <div className={classes.width}>
            <div className='d-flex flex-wrap mx-2 align-items-center justify-content-center' style={{rowGap:"20px", columnGap:"15px"}}>
                {
                    FormDetails.map((item)=>(
                        <>
                        <div className={`${classes.inputGroup} `}>
                            <label>{item.label}</label>
                            <input type={item.type}/>
                        </div>
                        </>
                    ))
                }
            </div>
        </div>
  )
}

export default UserInfo