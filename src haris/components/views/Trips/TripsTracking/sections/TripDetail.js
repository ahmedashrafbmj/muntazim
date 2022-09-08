

import classes from './TripDetail.module.css';

import TripCard from "./TripCard";


const TripDetail =(props)=>{
    const {Day,bookingDate,Place} = props.details;
    return(
        <>
        <div className="container-fluid my-5 mx-0">
                <div className="row">

                        <div className="col-sm-2 pt-2 pe-1 pb-1">
                            <div className={classes["date-card"]}>
                                    Day {Day}
                                    <p>{bookingDate}</p>
                            </div>
                        </div>
                        <div className={"col-lg-10 ms-auto float-end mt-lg-0 mt-2"}>
                            <div className={`row justify pt-4 pb-4 ps-4 pe-3 ${classes["card-container"]}`}>
                                {
                                    Place.map((item)=>(
                                        <div className="col-auto my-3">
                                            <TripCard key={item.id} data={item}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                </div>
        </div>
        </>
        
    )
}

export default TripDetail;