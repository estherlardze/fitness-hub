import React from 'react';
import {Stack, Typography} from '@mui/material';
import bodypart from '../assets/icons/gym.png';

const BodyPart = ({item}) => {
  return (
    <Stack className="bodyPart-card"
     sx={{background:"#656565",
        width:"200px",
        borderRadius:"10px",
        padding:"10px",
        margin:"0 20px",
        alignItems:"center",
        justifyContents:"center",
        cursor:"pointer"
    }}>
      <img src={bodypart} alt="gym" width="50px" heigth="50px" />
    <Typography sx={{fontSize:"20px", marginTop:"10px"}}>{item}</Typography>
    </Stack>
  )
}

export default BodyPart
