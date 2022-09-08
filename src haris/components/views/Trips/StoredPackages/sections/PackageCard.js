import React from 'react';
import classes from './PackageCard.module.css';


import img1 from '../../../../../assets/fairyMeadows.png';
import img2 from '../../../../../assets/House-in-Snow.png';
import img3 from '../../../../../assets/lake.png';



const PackageCard = (props) => {
  return (
    <div className='container-lg mx-auto' style={{maxWidth:"850px"}}>
        <div className={`d-flex flex-column mx-2 px-1 my-3 mt-5`}>
            <h4 className={classes.heading}>Vendor Name <span>posted at 3:13 pm</span></h4>
            <div className={`${classes.CardContainer}`}>
                <h2> Hunza 10 Days Package</h2>
                <div className={`d-flex ${classes.items} align-items-center pb-3`}>
                    <i class="fa-solid fa-calendar"></i>
                    <p>10 Days</p>
                </div>
                <div  className={`d-flex ${classes.items} flex-wrap  align-items-center pb-3`}>
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Destinations: <span>ISB-SWAT-GB</span></p>
                </div>
                <div style={{rowGap:"10px"}}  className={`d-flex ${classes.items} flex-wrap align-items-center pb-3`}>
                    <i class="fa-solid fa-truck"></i>
                    <p className={classes.pStyle}>Transport</p>
                    <label class={classes.containerInput}>Bus
                        <input type="checkbox" checked="checked"/>
                        <span className={classes.checkmark}></span>
                    </label>
                    <label class={classes.containerInput}>Train
                        <input type="checkbox" />
                        <span className={classes.checkmark}></span>
                    </label>
                    <label class={classes.containerInput}>Airplane
                        <input type="checkbox" />
                        <span className={classes.checkmark}></span>
                    </label>
                    <label class={classes.containerInput}>Car
                        <input type="checkbox" />
                        <span className={classes.checkmark}></span>
                    </label>
                </div>
                <div  style={{rowGap:"10px"}} className={`d-flex ${classes.items} flex-wrap  align-items-center pb-3`}>
                    <i class="fa-solid fa-plate-wheat"></i>
                    <p className={classes.pStyle}>Meal</p>
                    <label class={classes.containerInput}>Breakfast
                        <input type="checkbox"/>
                        <span className={classes.checkmark}></span>
                    </label>
                    <label class={classes.containerInput}>Dinner
                        <input type="checkbox" checked="checked"/>
                        <span className={classes.checkmark}></span>
                    </label>
                </div>
                <div className='mt-3'>
                    <h5 className={classes.h5Grey}>Gallery:</h5>
                    <div  className={`d-flex ${classes.Gallery} flex-wrap  align-items-center`} style={{rowGap:"20px"}}>
                        <div>
                            <img src={img1} alt="IMG1"/>
                            <img src={img2} alt="IMG1"/>
                            <img src={img3} alt="IMG1"/>
                            
                            <button className={classes.btn}>{">"}</button>
                        </div>
                        <div className={`ms-auto  align-content-end ${classes["price-btn"]}`}>
                            <i class="fa-solid fa-coins pe-2"></i>
                            60,000 pkr
                        </div>
                    </div>

                </div>


            </div>
        </div>
    </div>
  )
}

export default PackageCard