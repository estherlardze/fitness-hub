import React from 'react';
import { SearchExercises, Hero} from '../components/index';
import {Box} from '@mui/material';

const Home = () => {
  return (
    <Box >
       <Hero />
       <SearchExercises/>
    </Box>
  )
}

export default Home
