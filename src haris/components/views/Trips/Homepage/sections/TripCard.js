
import React from 'react'
import SliderCard from '../../UI/Cards/SliderCard';
import classes from './TripCard.module.css'

const TripCard = (props) => {
    const{label,Days,Persons, Price } = props.Values
    
  return (
    <SliderCard Values={{label, img:props.img}}>  
        <div className={`${classes.cardBody} pb-2`}>
            
            <ul>
                <li><i class="fa-solid fa-calendar"></i> {Days} Days</li>
                <li><i class="fa-solid fa-user"></i> {Persons} Persons</li>
                <li><i class="fa-solid fa-tags"></i> {Price} PKR</li>
            </ul>
            <h5>Activities:</h5>
            <div className={`d-flex  ${classes.icon}`}>
                <i class="fa-solid fa-person-hiking"></i>
                <i class="fa-solid fa-tent"></i>
            </div>
            <div className='float-end'>
                <button className={classes.btn}>{">"}</button>
            </div>
        </div>
    </SliderCard>
  )
}

export default TripCard;