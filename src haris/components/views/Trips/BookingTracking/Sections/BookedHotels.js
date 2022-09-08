import WrapperRadius from '../../UI/WrapperRadius';
import classes from './BookedHotels.module.css'

const BookedHotels = (props)=>{
    const {id,TownName,hotelName, arrivalDate, departureDate, bedrooms, InfoLink, hotelImage}=props.BookHotelData;
    return(
        <>
                
                    <div className="col-lg-6 col-xxl-6  my-2">
                        <WrapperRadius className={`card ${classes.card} row d-flex justify-content-start flex-row flex-wrap pb-xl-4`}>
                            <h4><i className="fa fa-map-marker" aria-hidden="true"></i> {TownName} </h4>
                            <div className={`col-4 ${classes.imageSection}`}>
                                <WrapperRadius className={classes.Image}>
                                    <img src={hotelImage} className="card-img-top" alt="..."/>
                                </WrapperRadius>
                            </div>
                            <div className={`col-6 col-sm-7 ${classes.m0}`}>
                                <div className={` ${classes.DetailsSection} d-flex flex-column flex-wrap`}>
                                    <h5 className="card-title">{hotelName}</h5>
                                    <div className={`d-flex justify-content-start align-items-center ${classes.listwithIcon}`}>
                                        <i className="fa-solid fa-calendar-days"></i>
                                        <p>{arrivalDate} <span>to</span> {departureDate}</p>
                                    </div>
                                    <div className={`d-flex justify-content-start align-items-center ${classes.listwithIcon}`}>
                                        <i className="fa fa-bed"></i>
                                        <p>{bedrooms} Bedrooms</p>
                                    </div>
                                    <button className={`ms-auto align-self-end ${classes.expandButton}`} onClick={()=>(console.log(InfoLink, id))}>{">"}</button>
                                </div>
                            </div>
                            
                        </WrapperRadius>
                    </div>                 

        </>
    )
}

export default BookedHotels;