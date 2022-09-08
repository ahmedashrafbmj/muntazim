import classes from './FormCYOT.module.css'
import Input from '../../UI/Input'
import {  useState } from 'react'

const FormInput = (props)=>{

    const [destination, setDestination] = useState(["",]);
    const addNewTextwithIcon = (<><i className="fa-solid fa-plus"></i> Add New</>);
    const destinationClasses = (destination.length >1) ? `mt-4 ${classes["btn-blue-transparent"]}` :`${classes["btn-gray-transparent"]}`;

    const DestinationChangeHandler = (value, index)=>{
            destination[index]= value
            setDestination(destination)
    }
    return(
        <>
       {props.Form === "Budget" &&(
            <>
            <label>How much are you willing to spend?</label>
            <Input type="text" className={classes.inputPinkCenter} rightText="Pkr" />
            </>
        )}
        {props.Form === "Current Location" &&(
            <>
            <label>Where are you?</label>
            <Input type="text"   iconLeftClassName="fa-solid fa-location-dot"  iconRightClassName="fa-solid fa-caret-up" placeholder="Current Location"/>
            </>
        )}
        {props.Form === "Destination" &&(
            <>
            <label>What do u wanna visit?</label>
            
            {
                destination.map((item , index)=>(
                    
                    <div key={Math.random()} className={`d-flex align-items-center mb-2 ${classes["flex-container"]}`}>
                        <Input type="text" key={Math.random()}   iconLeftClassName="fa-solid fa-location-dot"  iconRightClassName="fa-solid fa-caret-up" onChange={(value)=>(DestinationChangeHandler(value, index))} placeholder="Enter Location"/>
                        {(destination.length >1) && <button className='px-3 py-0 m-0' key={Math.random()} onClick={()=>(setDestination(destination.filter((obj, i)=>(index !== i))))}>
                            <i  key={Math.random()} className="fa-solid fa-x"></i> Remove</button>}
                    </div>
            
                ))
            }

            <button className={destinationClasses} onClick={()=>(setDestination([...destination, ""]))}>
                {(destination.length >1)?addNewTextwithIcon:"Multiple locations?"} 
            </button>
                
            </>
        )}
        {props.Form === "Stay Dates" &&(
            <>
            <div className='d-flex flex-wrap'>
                <div className='pe-3'>
                    <label>To</label>
                    <Input type="date" placeholder="DD/ MM / YYYY"/>
                </div>
                <div className='pe-3'>
                    <label>From</label>
                    <Input type="date"  placeholder="DD/ MM / YYYY"/>
                </div>
            </div>
            </>
        )}
        {props.Form === "Travellers" &&(
            <>
            <label>Number of travelers?</label>
            <Input type="number"  className={classes.inputPinkCenter} />
            </>
        )}
        

        </>
    )
}

export default  FormInput;