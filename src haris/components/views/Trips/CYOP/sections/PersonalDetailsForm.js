import React, { useState } from 'react'
import FormUI from './FormUI'
import UploadImage from './UploadImage'
import UserInfo from './UserInfo'
import UserInfo2 from './UserInfo 2'

const formArray =[<UploadImage/>,<UserInfo/>,<UserInfo2/> ]
const PersonalDetailsForm = () => {
  const [formNo, setFormNo] = useState(0);
  const nextformHandler=()=>{
    formNo<formArray.length-1?setFormNo(formNo+1):alert("Submited")
  }
  return (
    <FormUI onClick={nextformHandler} heading={["Personal", "Details"]}>
        {formArray[formNo]}
    </FormUI>
  )
}

export default PersonalDetailsForm