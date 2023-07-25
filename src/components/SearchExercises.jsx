import React, {useEffect, useState} from 'react';
import {Box, Typography, Stack, TextField, Button} from '@mui/material';
import { fetchExercise, exerciseOptions } from '../utils/FetchData';
import {HorizontalScrllbar} from '../components/index';

const SearchExercises = ({bodyPart, setBodyPart, setExercises}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() =>  {
    const fetchExerciseData = async () => {
      const BodypartList = await fetchExercise("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);
      console.log(BodypartList)
      setBodyParts(["all", ...BodypartList])
    }

    fetchExerciseData();
  }, []);


  const handleSearch = async() =>{
    if(search){
      const searchedExercise = await fetchExercise("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);

      const filteredExercise = searchedExercise.filter((exercise) =>
        exercise.name.toLowerCase().includes(search)|| exercise.target.toLowerCase().includes(search)||
        exercise.equipment.toLowerCase().includes(search)|| exercise.bodyPart.toLowerCase().includes(search)  
      )
      console.log(searchedExercise)
       setExercises(filteredExercise)      
    }
    setSearch("")
  }
 
   
  return (
    <Stack sx={{ 
     color:"#fff", 
     marginTop:"140px",
    alignItems:"center",
    justifyContent:"center"
     }}>

      <Typography sx={{
         textAlign:"center", 
         fontSize:{xs:"28px", md:"45px"}, 
         fontWeight:700,
         marginBottom:"30px"}}>Awesome exercises you <br /> should know</Typography>
       <Box sx={{ position:"relative", marginBottom:"70px"}} >
       <TextField 
        sx={{input:{
          color:"#fff", fontWeight:"700",
          border:0,
          borderRadius:"10px",
          outline:"none"
          },     
          width:{xs:"100%", md:"800px"}
         }}
        placeholder="Search exercises"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
       />
       <Button className='search-btn'
       onClick={handleSearch}
       sx={{position:"absolute", backgroundColor:"#f48915", color:"#fff", padding:"14px 22px"}}
       >
        Search</Button>
      </Box> 

      <Box width="100%" position="absolute" padding="0 10px" marginTop="380px" >
        <HorizontalScrllbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises
