import React from 'react';
import {Stack, Box, Typography} from '@mui/material';
import HorizontalScrllbar from './HorizontalScrllbar';

const SimilarExercise = ({exercisebyTarget, exercisebyEquipment}) => {
  //  console.log(exercisebyTarget)
  //  console.log(exercisebyEquipment)
  return (
    <Box sx={{margin:{xs:"20px", lg:"70px 50px"}, color:"#fff"}} position="relative" >

      <Stack marginTop={{xs:"40px", lg:"100px"}}>
          <Typography variant="h4" fontSize={{xs:"28px", lg:"35px"}} mb={{xs:"20px", lg:"50px"}}>
            Similar <span style={{color:"#e85217"}}>Target Muscle</span> Exercises
          </Typography>

           {exercisebyTarget.length !== 0 ? <HorizontalScrllbar data={exercisebyTarget}/> 
           : <Typography color="#fff" variant='h4'>Loading...</Typography>}
      </Stack>

      <Stack marginTop={{xs:"40px", lg:"100px"}}>
     <Typography variant="h4" fontSize={{xs:"28px", lg:"35px"}} mb={{xs:"20px", lg:"50px"}}>
         Similar <span style={{color:"#e85217"}}>Equipment</span> Exercises
       </Typography>
       {exercisebyEquipment.length !== 0 ? <HorizontalScrllbar data={exercisebyEquipment}/> 
       : <Typography color="#fff" variant='h4'>Loading...</Typography>}
       </Stack> 
     </Box>
  )
}

export default SimilarExercise
