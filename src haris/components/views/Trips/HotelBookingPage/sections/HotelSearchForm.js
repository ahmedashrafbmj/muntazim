
import WrapperRadius from '../../UI/WrapperRadius';
import classes from './HotelSearchForm.module.css';

const HotelSearchForm = ()=>{
    return(
        <>
            <div className={`text-center mx-2 ${classes.container}`}>
                <h2><i className="fa fa-home" aria-hidden="true"></i> Hotels</h2>
                <p>Planning to stay for a while? Checkout out the perfect location for your family.</p>
                
            </div>
            <WrapperRadius className={`${classes.form}`}>
                <form>
                    <div className='d-flex flex-wrap mx-lg-0 mx-2  p-2 justify-content-center align-items-center'>
                        
                        <div className={classes.Input}>
                            <div className={classes.label}><label>Where</label></div>
                            <div className={`${classes.inputGroup} align-items-center`}>  
                                    <span className={`${classes.icon}`}><i className="fa-solid fa-location-dot"></i></span>
                                        <input type="text" placeholder='Location'/>
                                    <span className={classes.caret}><i className="fa-solid fa-caret-up"></i></span>
                            </div>
                        </div>

                        <div className={classes.Input}>
                            <div className={classes.label}><label>Check In</label></div>
                            <div className={`${classes.inputGroup} align-items-center`}>  
                                    <span className={`${classes.icon}`}><i className="fa-solid fa-plane-departure"></i></span>
                                        <input type="text" placeholder='mm/dd/yyyy'/>
                                    <span className={classes.caret}><i className="fa-solid fa-caret-up"></i></span>
                            </div>
                        </div>

                        <div className={classes.Input}>
                            <div className={classes.label}><label>Check Out</label></div>
                            <div className={`${classes.inputGroup} align-items-center`}>  
                                    <span className={`${classes.icon}`}><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                                        <input type="text" placeholder='mm/dd/yyyy'/>
                                    <span className={classes.caret}><i className="fa-solid fa-caret-up"></i></span>
                            </div>
                        </div>

                        <div className={classes.Input}>
                            <div className={classes.label}><label>Travelers</label></div>
                            <div className={`${classes.inputGroup} align-items-center`}>  
                                    <span className={`${classes.icon}`}><i className="fa-solid fa-people-group"></i></span>
                                        <input type="text" placeholder='Adult/Kids'/>
                                    <span className={classes.caret}><i className="fa-solid fa-caret-up"></i></span>
                            </div>
                        </div>

                    </div>
                </form>
            </WrapperRadius>

        </>
    )
}

export default HotelSearchForm;