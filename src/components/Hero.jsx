import React from 'react';
import {Navbar, RightsideHero, LeftsideHero} from './index';
import {Box, Stack} from '@mui/material';

const Hero = () => {
  return (
    <Stack direction={{xs:"column", md:"row" }}>
       <div className='blur'></div> 
       <Box flex={2} 
       sx={{ margin:{xs:"30px 20px", md:"30px 40px"}}}
      >
        <Navbar />
        <LeftsideHero />
      </Box> 

      <Box flex={1} sx={{backgroundColor:{sm:"trasparent", md:"#f48915"}, position:"relative"}}>
       <RightsideHero/>
      </Box>
     
    </Stack>
  )
}

export default Hero
