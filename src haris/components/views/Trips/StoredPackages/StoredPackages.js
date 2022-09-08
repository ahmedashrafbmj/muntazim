import React from 'react'
import bgImage from '../../../../assets/packagesbg.jpeg'

import HeroSection from "../Header/HeroSection";
import { H2Pink } from '../UI/Heading';
import PackageCard from './sections/PackageCard';
import classes from './StoredPackages.module.css';

const StoredPackages = () => {
  return (
        <>
            <HeroSection bgUrl={bgImage} className={`${classes.bgImage}`}>
                <div className={`mb-5 d-flex justify-content-center align-items-center ${classes.Heading}`}>
                    <i className="fa-solid fa-newspaper"></i>
                    <H2Pink className={`text-center `}>Packages</H2Pink>
                </div>
                <PackageCard/>
            </HeroSection>
            
        </>
  )
}

export default StoredPackages