
import logoSnow from '../../../../../assets/House-in-Snow.png';

import {H2Pink} from '../../UI/Heading';

import HotelCard from './HotelCard';
import Slider from '../../UI/Slider';

const Hotels = (props)=>{
    return(
        <div className='container-xxl pb-5'>
            <H2Pink className="pt-5 pb-4 ps-3">Browse by Property Type</H2Pink>
        <div >
            <Slider>
                {props.HotelData.map((item)=>(
                    <HotelCard key={item.id} img={logoSnow} hotelDetails={item}/> 
                ))}
            </Slider>
        </div>
            

        </div>
        
   
    )
}

export default Hotels;