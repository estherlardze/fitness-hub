import React, {useState, useEffect} from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import ExerciseCard from './ExerciseCard';

import { exerciseOptions, fetchExercise } from '../utils/FetchData';

const Exercises = ({exercises, setExercises, bodyPart}) => {

  useEffect(() =>{

    const exerciseData = async () => {

     let BodypartData = [];
     if(bodyPart === "all"){
       BodypartData =  await fetchExercise("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);     
      }
      else {
        BodypartData = await fetchExercise(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(BodypartData);
    } 
    exerciseData();

  },[bodyPart])

 
  if(!exercises.length) return "Loading..."
  return (
    <Box id='exercise' margin="300px 40px 10px">
      <Typography variant='h3' color="#fff" marginBottom="50px">Showing results {bodyPart ? <span style={{color:"tomato"}}>{`${bodyPart}`}</span> : ""}  workouts</Typography>
      <Stack direction="row"
       alignItems="center" 
       justifyContent="center"
       flexWrap="wrap" gap="47px"
       marginBottom="50px">

      {exercises.slice(0,50).map((exercise, index) => (
          
      
       <ExerciseCard  exercise={exercise} key={index}/>
       ))}
      </Stack>

    </Box>
  )
}

export default Exercises
