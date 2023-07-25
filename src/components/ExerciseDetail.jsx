import React from 'react';
import {Stack, Typography, Button} from '@mui/material';
import bodypartIcon from '../assets/icons/body-part.png';
import targetIcon from '../assets/icons/target.png';
import equipmentIcon from '../assets/icons/equipment.png';



const ExerciseDetail = ({ ExerciseDetails }) => {
    
    
const exerciseData = [
    {
     icon : bodypartIcon,
     text: ExerciseDetails.bodyPart,
    },
    {
    icon : targetIcon,
    text: ExerciseDetails.target,
    }, 
    {
    icon : equipmentIcon,
    text: ExerciseDetails.equipment,
    }
]
  console.log(ExerciseDetails)
  return (
    <Stack direction={{xs: "column", lg:"row"}} gap="80px"
       color="#fff" justifyContent="center"
      alignItems="center" margin={{xs: "20px"}}>
      <img src={ExerciseDetails.gifUrl} alt={ExerciseDetails.id} className='exercisepage-card'/>
      <Stack>

       <Typography variant="h3" mb="20px" fontSize={{xs:"30px", lg:"45px"}} textTransform="capitalize">{ExerciseDetails.name}</Typography>
        <Typography mb="20px">Exercise Keep you strong {ExerciseDetails.name} {" "} is one <br />of the best exercise to target your {" "}
         {ExerciseDetails.bodyPart}. <br />It will help you improve your mood and gain energy</Typography>

            {exerciseData.map((item, index) => (
              <Stack direction="row" key={index} gap="20px" alignItems="center">
                   <img src= {item.icon} alt= {item.icon} className='exercise-icon'/>
                 <Typography>
                  {item.text} 
                 </Typography>
              </Stack>             
            ))       
            }
           
      </Stack>

    </Stack>
  )
}

export default ExerciseDetail
