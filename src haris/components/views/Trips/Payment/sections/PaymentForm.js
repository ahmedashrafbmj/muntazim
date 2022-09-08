import { useState } from "react";
import classes from "./PaymentForm.module.css";

const PaymentForm = (props)=>{

    const fields= props.fields;
    const [paymentMethod, setPaymentMethod] = useState("Credit Card");
    return(
        <>

            <div className={`ps-5 d-flex ${classes.input}`}>
                {
                    fields.map((item)=>(
                        <>
                            <div className={`d-flex align-items-center pt-3 pb-4 pe-3 ${classes.CheckBox}`}>
                                <input id={classes["box-shadow"]} type="radio" key={item.id} name="paymentMethod" value={item.type} onChange={(e)=>(setPaymentMethod(e.target.value))} checked={paymentMethod === item.type}/>
                                <label key={item.id+1}>{item.type}</label>
                            </div>
                        </>
                    ))
                }
            </div>
            <div className={`border-top d-flex flex-wrap pb-4`}>
            {
                fields.map((item)=>(
                    item.type ===paymentMethod ?
                    (
                        item.formFields.map((formInputField)=>(
                        <div className={`${classes.formField} ms-4 mt-4 m-1 me-4`}>
                            <label htmlFor="input1" className={`ms-4 position-absolute ${classes.label}`}>
                                <span className="h6 small">{formInputField.label}</span>
                            </label>
                            <input type={formInputField.type} className="form-control mt-2 ps-4" id="input1"/>
                        </div>
                        ))

                    ):
                    <></>
                
                ))
            }
             </div>




        </>
    )
}

export default PaymentForm;