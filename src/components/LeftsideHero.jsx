import React from 'react';
import {Box, Stack, Typography, Button } from '@mui/material'

const LeftsideHero = () => {
  return (
    <Stack marginTop="60px" >
       <div style=
          {{backgroundColor:"#fa5042",
           width:"50px", height:"40px",
           borderRadius:"15px",
           position:"absolute",
           left:"0" }}></div>

       <Typography  variant='body2'
        sx={{textTransform:"uppercase", 
           backgroundColor:"#2b2c2e",
           width:"fit-content",
           padding:"12px 20px",
           borderRadius: "20px",
           margin:"30px 0",
           color: "#fff",
           position:"relative"}}
         >
        The best fitness club in town
        </Typography>

        <Box sx={{color: "#fff"}}>
          <Typography
            sx={{fontSize:{xs:"40px", md:"70px"},
            textTransform:"uppercase",
            fontWeight:700
            }}
           >
            <span className='stroke-text'>Sweat,</span> Smile</Typography>

          <Typography sx={{fontSize:{xs:"40px", md:"70px"},
            textTransform:"uppercase",
            fontWeight:700
            }}
            >
            And repeat</Typography>
            <Typography sx={{textOverflow:"inherit"}}>Check out the most effective exercises personalized  to shape and build your ideal body</Typography>
            <Button sx={{backgroundColor:"#f48915", mt:"30px", color:"#fff", p:"10px 20px"}}>Explore exercises</Button>
        </Box>
        
    </Stack>
  )
}

export default LeftsideHero
