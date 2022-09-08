import classes from  './SearchTripNumber.module.css';

const SearchTripNumber = ()=>{
    return(
        <>
            <div className={`text-center ${classes.heading}`}>
              <h2>Booked Hotels {"&"} Tickets</h2>
              <p>View your trip details</p>
            </div>
     
            <div className={`col-8 d-flex justify-content-center align-items-center text-center ${classes.search}`}>
              <input type="text"className="form-control" placeholder="Enter your trip order number" />
              <button className="btn">
                <i className="fa fa-search"></i>
              </button>
            </div>
        </>
    )
}

export default SearchTripNumber;