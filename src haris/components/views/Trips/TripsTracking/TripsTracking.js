import bgImage from '../../../../assets/section2.png'

import HeroSection from "../Header/HeroSection";
import TripDetail from './sections/TripDetail';
import TrackingNumberHeadline from '../Header/TrackingNumberHeadline';
import SearchTripNumber from '../Header/SearchTripNumber';

import LakeImg from '../../../../assets/lake.png'; 
import fairyMeadowsImg from '../../../../assets/fairyMeadows.png'; 
import chilasImg from '../../../../assets/chilas.png'; 
import BlurCard from '../UI/Cards/CardBlur';


const TrackingNumber ="240299";
const TripData = [
    {id:1,Day:"1", bookingDate:"30/07", 
    Place:[
        {id:"p1", image:LakeImg, PlaceName:"Kenjaheer Lake", Arrival:"1:39 PM", Departure:"6:00 PM"},
        {id:"p2", image:fairyMeadowsImg, PlaceName:"Fairy Meadows", Arrival:"1:39 PM", Departure:"6:00 PM"},
        {id:"p3", image:chilasImg, PlaceName:"Chillas Town", Arrival:"1:39 PM", Departure:"6:00 PM"},
    ]
    },
    {id:2,Day:"2", bookingDate:"31/07", 
    Place:[
        {id:"p1", image:LakeImg, PlaceName:"Kenjaheer Lake", Arrival:"1:39 PM", Departure:"6:00 PM"},
        {id:"p2", image:fairyMeadowsImg, PlaceName:"Fairy Meadows", Arrival:"1:39 PM", Departure:"6:00 PM"},
        {id:"p3", image:chilasImg, PlaceName:"Chillas Town", Arrival:"1:39 PM", Departure:"6:00 PM"},
    ]
    },
]
const TripsTracking = ()=>{
    return (
        <>
        <HeroSection bgUrl={bgImage}>
            <BlurCard style={{paddingBottom:"3.5rem"}}>
                <SearchTripNumber/>
           </BlurCard>
        </HeroSection>
        <TrackingNumberHeadline  TrackingNumber={TrackingNumber}/>
        {
            TripData.map((item)=>(
                <TripDetail details={item}/>
            ))
        }
        
        </>
    )
}

export default TripsTracking;