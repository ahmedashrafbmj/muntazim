import bgImage from '../../../../assets/section2.png'

// import VehiclesImage from '../../../../assets/VehiclesImage';
import VehiclesImage from "../../../../assets/markets.jpeg"
import HotelImage from '../../../../assets/Area.jpeg';
import TripsImage from '../../../../assets/Shops.jpeg';

import HeroSection from "../Header/HeroSection";
import DetailsCard from './sections/DetailsCard';
import FeaturedTrips from './sections/FeaturedTrips';


const CardValues=[
    {id:1, img:VehiclesImage, label:"Markets"},
    {id:2, img:HotelImage, label:"Area"},
    {id:3, img:TripsImage, label:"Shops"},
]

const FeaturedMaketsData=[
    {id:1, label:"K-2", Days:"10", Persons:"3-4", Price:"80,000"},
    {id:2, label:"Saif ul Malook", Days:"2", Persons:"1-5", Price:"800,000"},
    {id:3, label:"Rakaposhi", Days:"18", Persons:"single Person", Price:"800,000"},
    {id:3, label:"Rakaposhi", Days:"18", Persons:"single Person", Price:"800,000"},
    {id:3, label:"Rakaposhi", Days:"18", Persons:"single Person", Price:"800,000"},
    {id:3, label:"Rakaposhi", Days:"18", Persons:"single Person", Price:"800,000"},
]
const FeaturedShopsData=[
    {id:1, label:"K-2", Days:"10", Persons:"3-4", Price:"80,000"},
    {id:2, label:"Saif ul Malook", Days:"2", Persons:"1-5", Price:"800,000"},
    {id:3, label:"Rakaposhi", Days:"18", Persons:"single Person", Price:"800,000"},
    {id:3, label:"Rakaposhi", Days:"18", Persons:"single Person", Price:"800,000"},
    {id:3, label:"Rakaposhi", Days:"18", Persons:"single Person", Price:"800,000"},
    {id:3, label:"Rakaposhi", Days:"18", Persons:"single Person", Price:"800,000"},
]
const FeaturedAreasData=[
    {id:1, label:"K-2", Days:"10", Persons:"3-4", Price:"80,000"},
    {id:2, label:"Saif ul Malook", Days:"2", Persons:"1-5", Price:"800,000"},
    {id:3, label:"Rakaposhi", Days:"18", Persons:"single Person", Price:"800,000"},
    {id:3, label:"Rakaposhi", Days:"18", Persons:"single Person", Price:"800,000"},
    {id:3, label:"Rakaposhi", Days:"18", Persons:"single Person", Price:"800,000"},
    {id:3, label:"Rakaposhi", Days:"18", Persons:"single Person", Price:"800,000"},
]


const Homepage = ()=>{
    return(
        <>
        
        <HeroSection bgUrl={bgImage}>
            <DetailsCard CardValues={CardValues}/>
        </HeroSection>
        <FeaturedTrips Values={FeaturedShopsData}/>

        </>
    )
}

export default Homepage;