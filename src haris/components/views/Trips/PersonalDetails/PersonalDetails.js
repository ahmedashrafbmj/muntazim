import React from 'react'

import bgImage from '../../../../assets/bImage.jpg'

import HeroSection from "../Header/HeroSection";
import BlurCard from '../UI/Cards/CardBlur';

import classes from './PersonalDetails.module.css';
import PersonalDetailsForm from './sections/PersonalDetailsForm';

const   PersonalDetails = () => {
  return (
    <HeroSection bgUrl={bgImage} className={`justify-content-center ${classes.bgImage}`} >
    <BlurCard style={{paddingBottom:"0.5rem"}}>
        <PersonalDetailsForm/>
    </BlurCard>
    </HeroSection>
  )
}

export default PersonalDetails