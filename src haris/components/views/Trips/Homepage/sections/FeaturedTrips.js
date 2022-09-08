import VehiclesImage from "../../../../../assets/Shops.jpeg"


import {H2Pink} from '../../UI/Heading';
import Slider from '../../UI/Slider';

import TripCard from './TripCard';



const FeaturedTrips = (props)=>{
    console.log(props)
    return(
        <>
        <div className='container-xxl pb-5'>
            <H2Pink className="pt-5 pb-4 ps-2 ms-5">Featured Trips</H2Pink>
            <div>
                <Slider>
                    {props.Values.map((item)=>(
                        <TripCard key={item.id} img={VehiclesImage} Values={item}/>
                    ))}   
                </Slider>
            </div>
            

        </div>
        </>
    )
}

export default FeaturedTrips;