import React from 'react';
import {Box} from '@mui/material';
import headerImage from '../assets/images/hero_image.png';

const RightsideHero = () => {
  return (
    <Box > 
       <img src={headerImage} alt="header" className='hero-banner-img'/>
       
    </Box>
  )
}

export default RightsideHero
