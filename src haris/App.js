import logoMuntazim from './assets/logo.png'

import Navbar from "./components/views/Trips/Header/Navbar";

import BidStatus from './components/views/Trips/Bid Status/BidStatus';
import BookingTracing from "./components/views/Trips/BookingTracking/BookingTracing";
import Payment from "./components/views/Trips/Payment/Payment";
import TripsTracking from "./components/views/Trips/TripsTracking/TripsTracking";
import HotelBooking from "./components/views/Trips/HotelBookingPage/HotelBooking";
import Homepage from "./components/views/Trips/Homepage/HomePage";
import StoredPackages from "./components/views/Trips/StoredPackages/StoredPackages";
import CYOT from "./components/views/Trips/CYOT/CYOT";
import PersonalDetails from "./components/views/Trips/PersonalDetails/PersonalDetails";
import CYOP from './components/views/Trips/CYOP/PersonalDetails';

const NavLinks = [
  {id:1,label:"About Us", linkPath:"/"},
  {id:2,label:"Contact Us", linkPath:"/"},
  {id:3,label:"Trips", linkPath:"/"},
]
const Brandlogo ={
  imgPath:logoMuntazim,
  linkPath:"",
}
function App() {
  return (
    <>
    {/* <Navbar logo={Brandlogo} navLinks={NavLinks}/> */}

    {/* <BookingTracing/> */}
    {/* <Payment/> */}
    {/* <TripsTracking/> */}
    {/* <HotelBooking/> */}
    {/* <Homepage/> */}
    {/* <StoredPackages/> */}
    {/* <CYOT/> */}
    <BidStatus/>
    </>

  );
}

export default App;
