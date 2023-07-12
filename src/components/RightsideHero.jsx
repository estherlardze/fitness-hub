import React from 'react';
import {Box, Stack, Typography } from '@mui/material'

const RightsideHero = () => {
  return (
    <Stack marginTop="60px">
       <Typography 
        sx={{textTransform:"uppercase", 
           backgroundColor:"#2b2c2e",
           width:"fit-content",
           padding:"12px 20px",
           borderRadius: "20px",
           color: "#fff"}}
         >
        The best fitness club in town
        </Typography>

        <Box sx={{color: "#fff"}}>
          <Typography
            sx={{fontSize:"50px",
            textTransform:"uppercase",
            fontWeight:700
            }}
           ><span>Shape</span> your</Typography>

          <Typography sx={{fontSize:"50px",
            textTransform:"uppercase",
            fontWeight:700
            }}
            >
            ideal body</Typography>
            <Typography>In here we will help you to shape and build your ideal body and live up your life to fullest</Typography>
        </Box>
        
    </Stack>
  )
}

export default RightsideHero
