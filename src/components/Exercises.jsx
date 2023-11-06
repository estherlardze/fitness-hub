import React, { useEffect, useState} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import ExerciseCard from './ExerciseCard';
import LoadingSpinner from './Loader';
import { exerciseOptions, fetchExercise } from '../utils/FetchData';

const Exercises = ({exercises, setExercises, bodyPart}) => {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() =>{

    const exerciseData = async () => {

     let BodypartData = [];
     if(bodyPart === "all"){
       BodypartData =  await fetchExercise("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);     
      }
      else {
        BodypartData = await fetchExercise(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setIsLoading(false)
      setExercises(BodypartData);
    } 
    exerciseData();

  },[])

 
  if(!exercises.length) return 

  return (
    <>
    {isLoading ? <LoadingSpinner/> :
      (<Box id='exercise' margin="300px 40px 10px">
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

    </Box>)
}
    </>
    
  )
}

export default Exercises
