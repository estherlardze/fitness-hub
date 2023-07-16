import React, {useState} from 'react';
import { SearchExercises, Hero, Exercises} from '../components/index';
import {Box} from '@mui/material';


const Home = () => {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all")
  return (
    <Box >
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
