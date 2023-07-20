import React, {useState, useEffect} from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import {Pagination} from '@mui/material';

import { exerciseOptions, fetchExercise } from '../utils/FetchData';

const Exercises = ({exercises, setExercises, bodyPart}) => {

  const [CurrentPage, setCurrentPage] = useState(1);
  const [CountsPerPage] = useState(9);

  const lastPageIndex = CurrentPage * CountsPerPage;
  const firstIndexPage = lastPageIndex - CountsPerPage; 
  const exerciseCount = exercises.slice(firstIndexPage, lastPageIndex);

  console.log(exerciseCount)

  const paginate = (e,  value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1200, behavior: 'smooth' });
  }

  useEffect(() =>{

    const exerciseData = async () => {

     let BodypartData = [];
     if(bodyPart === "all"){
       BodypartData =  await fetchExercise("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);     
      }
      else {
        BodypartData = await fetchExercise(`https://exercisedb.p.rapidapi.com/exercises/bodyPart${bodyPart}`, exerciseOptions);
      }
      setExercises(BodypartData);
    } 
    exerciseData();

  },[bodyPart])
 
  if(!exerciseCount.length) return "Loading..."
  return (
    <Box id='exercises' margin="300px 40px 10px">
      <Typography variant='h3' color="#fff" marginBottom="50px">Showing results</Typography>
      <Stack direction="row"
       alignItems="center" 
       justifyContent="center"
       flexWrap="wrap" gap="47px"
       marginBottom="50px">

      {exerciseCount.map((newexercise) => (
         <Link to="/newexercise/${newexercise.id}" className='exercise-card' key={newexercise.id}>
        <img src={newexercise.gifUrl} alt="gif" />
        <Stack direction="row" justifyContent="space-around" color="#fff">
          <Button 
            sx={{backgroundColor:"#e8b533",
             borderRadius:"20px",
             color:"#fff",
             padding:"5px 10px",
             textTransform:"capitalize" }}
          >
             {newexercise.bodyPart}
          </Button>
          <Button 
            sx={{backgroundColor:"#54504d",
             borderRadius:"20px",
             color:"#fff",
             padding:"5px 10px",
             textTransform:"capitalize" }}
          >
             {newexercise.target}
          </Button>
        </Stack>
        <Typography 
          sx={{color:"#000",
          textTransform:"capitalize",
          textAlign:"center",
          fontSize:"18px",
          fontWeight:700}}>

          {newexercise.name}
          </Typography>
      </Link>
       ))}
      </Stack>
      <Stack  alignItems="center" marginTop="100px">
        {exercises.length > 9 && ( 
          <Pagination 
          sx={{color:"#fff"}}
           color="standard"
           count={Math.ceil(exercises.length / CountsPerPage)}
           page={CurrentPage}
           onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises
