import React, { useState } from 'react'
import FormUI from './FormUI'
import UploadImage from './UploadImage'
import UserInfo from './UserInfo'

const formArray =[<UploadImage/>,<UserInfo/> ]
const PersonalDetailsForm = () => {
  const [formNo, setFormNo] = useState(0);
  return (
    <FormUI onClick={()=>(setFormNo(formNo+1))} heading={["Personal", "Details"]}>
        {formArray[formNo]}
    </FormUI>
  )
}

export default PersonalDetailsForm