import classes from './HotelBooking.module.css'


import bgImage from '../../../../assets/section2.png'

import HotelSearchForm from "./sections/HotelSearchForm";
import Hotels from './sections/Hotels';
import BlurCard from '../UI/Cards/CardBlur';
import HeroSection from "../Header/HeroSection";


const HotelData = [
    {
        id:1,
        HotelName: "Sunrise Motel",
        hotelAwayfromLocation:"3.8 km from k2",
        Details:["3-6","3", "3", "12,000"]
    },
]


const HotelBooking = ()=>{
    return(
        <>
        <HeroSection bgUrl={bgImage}>
            <BlurCard>
            <HotelSearchForm/>
                <div className='pt-2 text-center'><button className={`${classes.btn}`}>Search!</button></div>
            </BlurCard>
        </HeroSection>
        <Hotels HotelData={HotelData}/>
        </>
    )
}

export default HotelBooking;