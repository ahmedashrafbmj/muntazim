import HotelOfImage from '../../../../assets/ImageOfHotel.png';
import bgImage from '../../../../assets/section.png'

import classes from './BookingTracing.module.css';
import classes2 from './Sections/BookedTickets.module.css'; //Ticket Table CSS
import WrapperRadius from '../UI/WrapperRadius';

import Navbar from "../Header/Navbar";
import HeroSection from "../Header/HeroSection";
import BookedHotels from './Sections/BookedHotels';
import BookedTickets from './Sections/BookedTickets';
import TrackingNumberHeadline from '../Header/TrackingNumberHeadline';
import SearchTripNumber from '../Header/SearchTripNumber';
import BlurCard from '../UI/Cards/CardBlur';




const TrackingNumber ="240299";

const BookedHotelsData = [
{id:1,TownName:'Chilas Town',hotelName:'C.Town Motel', arrivalDate:'01-Aug-22', departureDate:'14-Aug-22', bedrooms:'3', InfoLink:'', hotelImage:HotelOfImage},
]

const ticketData = [
    { id:1,person:"Jane Doe",Destination:"KHI-GBT", Date:"1-08-21", Departure:"1:38 PM", Arrival:'04-08-22'},
]
const ticketDataSchema = [
    "Person(s)","Destination", "Date", "Departure", "Arrival"
]

const BookingTracing = ()=>{
    return(
        <>

        <HeroSection bgUrl={bgImage}>
            <BlurCard className={classes.paddingBottom}>
                <SearchTripNumber/>
           </BlurCard>
        </HeroSection>
        <TrackingNumberHeadline  TrackingNumber={TrackingNumber}/>
        <div className={`container-xxl py-5 ${classes["booked-container"]}`}>
            <h2 className='mx-2'>My Booked Hotels</h2>
            <div className={`row mx-sm-2 mx-1`}>
            {
                BookedHotelsData.map((item)=>(
                    <BookedHotels key={item.id} BookHotelData={item}/>
                ))
            }
            </div>
        </div>

        <div className={`container-xxl  py-5 ${classes["booked-container"]}`}>
            <h2 className='mx-2'>My Booked Tickets</h2>
            <WrapperRadius className={`table-responsive-sm ${classes2.Card} text-center`}>
                <p className={"text-start"}>ticket No# {TrackingNumber} </p>
                <table className={`table ${classes2.table}`}>
                    <thead>
                        <tr>
                            {
                                ticketDataSchema.map((item)=>(
                                    <th scope="col">{item}</th>
                                ))
                            }
                            
                        </tr>
                    </thead>
                    <tbody>
                    {
                        ticketData.map((item)=>(
                            <BookedTickets key={item.id}  person={item.person} Destination={item.Destination} Date={item.Date} Departure={item.Departure} Arrival={item.Arrival}/>
                        ))
                    }
                    </tbody>
                </table>
            </WrapperRadius>
        </div>
        
        <div className="d-flex justify-content-center align-items-center ms-auto mb-5">
            <button type="button" className={`mx-2 me-5 ${classes["btn-transparent"]}`}>Print Ticket</button>
            <button type="button" className={`mx-2 ${classes["btn-color"]}`}>Download E-Ticket</button>
        </div>
        </>
    )
}

export default BookingTracing;