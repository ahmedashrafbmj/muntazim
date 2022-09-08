import classes from "./HeroSection.module.css";
import eyeIcon from '../../../../assets/eyeIcon.png';

const TrackingNumberHeadline = (props)=>{
   const  TrackingNumber= props.TrackingNumber;
    return(
        <>
            <div className={`${classes.OrderNumber} d-flex justify-content-center align-items-center`}>
                <img src={eyeIcon} alt="Eye Tracking"/>
                <h2>Tracking Trip Number: #{TrackingNumber}</h2>
            </div>
        </>
    )
}

export default TrackingNumberHeadline;