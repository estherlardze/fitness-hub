import React from 'react';
import {Stack, Box, Typography} from '@mui/material';
import HorizontalScrllbar from './HorizontalScrllbar';

const SimilarExercise = ({exercisebyTarget, exercisebyEquipment}) => {
  // console.log(exercisebyTarget)
  return (
    <Box sx={{margin:{xs:"20px", lg:"70px 50px"}, color:"#fff"}} position="relative">
      <Stack>
          <Typography variant="h4" fontSize={{xs:"32px", lg:"35px"}} mb={{xs:"20px", lg:"50px"}}>Similar <span style={{color:"#d8750a"}}>Target Muscle</span> Exercises</Typography>
           {exercisebyTarget.length !== 0 ? <HorizontalScrllbar data={exercisebyTarget}/> : <Typography>Loading...</Typography>}
      </Stack>

      {/* <Stack>
      <Typography variant="h4" fontSize={{xs:"32px", lg:"35px"}} mb={{xs:"20px", lg:"50px"}}>Similar <span style={{color:"#d8750a"}}>Equipment</span> Exercises</Typography>
           {exercisebyEquipment.length !== 0 ? <HorizontalScrllbar data={exercisebyEquipment}/> : <Typography>Loading...</Typography>}
      </Stack> */}
    </Box>
  )
}

export default SimilarExercise
