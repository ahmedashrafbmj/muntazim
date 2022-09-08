import SliderCard from '../../UI/Cards/SliderCard';
import classes from './HotelCard.module.css';

const HotelCard = (props)=>{
    const{HotelName,hotelAwayfromLocation,Details } = props.hotelDetails
    return(
    <>
                <SliderCard Values={{label:HotelName,distance:hotelAwayfromLocation, img:props.img}}>  
                    <div className={`${classes.cardBody}`}>
                        <h5>Details</h5>
                        <ul>
                            <li><i class="fa-solid fa-user"></i> {Details[0]} Persons</li>
                            <li><i class="fa-solid fa-bed"></i> {Details[1]} Rooms</li>
                            <li><i class="fa-solid fa-plate-wheat"></i> Meals x {Details[2]} a day</li>
                            <li><i class="fa-solid fa-tags"></i> {Details[3]} PKR (per head)</li>
                        </ul>
                    </div>
                    <div className='text-center p-0 m-0'>
                            <button className={classes.btn}>View more details</button>
                    </div>
                </SliderCard>
            
        </>
    )
}

export default HotelCard;