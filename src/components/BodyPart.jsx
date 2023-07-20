import React from 'react';
import {Stack, Typography} from '@mui/material';
import gym from '../assets/icons/gym.png';

const BodyPart = ({item, bodyPart, setBodyPart}) => {

  return (
    <Stack className="bodyPart-card"
     sx={{ borderTop: item === bodyPart ? "3px solid #f48915": "",
        background:"#656565",
        width:"200px",
        borderRadius:"10px",
        padding:"10px",
        margin:"0 20px",
        alignItems:"center",
        justifyContents:"center",
        cursor:"pointer"
    }}
     onClick={() => setBodyPart(item)}
     
    >
      <img src={gym} alt="gym" width="50px" heigth="50px" />
    <Typography sx={{fontSize:"20px", marginTop:"10px"}}>{item}</Typography>
    </Stack>
  )
}

export default BodyPart
