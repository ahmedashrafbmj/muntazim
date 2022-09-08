import React from 'react'
import bgImage from '../../../../assets/bImage.jpg'

import HeroSection from "../Header/HeroSection";
import BlurCard from '../UI/Cards/CardBlur';
import FormCYOT from './sections/FormCYOT';
import classes from './CYOT.module.css';



const CYOT = ()=>{
    return(
        <>
            
            <HeroSection bgUrl={bgImage} className={`justify-content-center ${classes.bgImage} `} >
                <BlurCard style={{paddingBottom:"0.5rem", paddingTop:"15px"} }>
                    <FormCYOT/>
                </BlurCard>
            </HeroSection>
        </>
    )
}

export default CYOT;