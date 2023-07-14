import React from 'react';
import {Box, Typography} from '@mui/material';
import {ScrollMenu} from 'react-horizontal-scrolling-menu';
import bodypart from '../assets/icons/gym.png'

const HorizontalScrllbar = ({data}) => {
 console.log(data);

return(
<ScrollMenu>
    {data.map((item) => (
        <Box key={item.id}
        className="bodyPart-card"
         sx={{background:"#656565",
          width:"150px",
          borderRadius:"10px",
          padding:"10px 20px",
          margin:"0 20px",
          alignItems:"center",
          justifyContents:"center"}}>
         <img src={bodypart} alt="gym" width="50px" heigth="50px" />
        <Typography sx={{fontSize:"20px", marginTop:"10px"}}>{item}</Typography>
        </Box> 
    ))}
</ScrollMenu>
  )
}

export default HorizontalScrllbar
