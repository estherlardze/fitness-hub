import React, {useState} from 'react';
import { SearchExercises, Hero, Exercises, Navbar} from '../components/index';
import {Box} from '@mui/material';


const Home = () => {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all")
  return (
    <Box >
       <Navbar />
       <Hero />
       <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}/>

       <Exercises 
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}/>
    </Box>
  )
}

export default Home
