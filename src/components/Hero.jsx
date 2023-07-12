import React from 'react';
import {Navbar, RightsideHero} from './index';
import {Box, Stack} from '@mui/material';

const Hero = () => {
  return (
    <Stack >
      <Box>
        <Navbar />
        <RightsideHero />
      </Box>
    </Stack>
  )
}

export default Hero
