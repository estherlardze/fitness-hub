import React, {useContext} from 'react';
import {Box, Typography} from '@mui/material';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import leftArrow from '../assets/icons/left-arrow.png';
import rightArrow from '../assets/icons/right-arrow.png';
import BodyPart from './BodyPart'


const HorizontalScrllbar = ({data, bodyPart, setBodyPart, bodyParts}) => {
//  console.log(bodyPart);
 
 const LeftArrow= () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={leftArrow} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
   
  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={rightArrow} alt="right-arrow" />
    </Typography>
  );
};

return(
<ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow} >
    {data.map((item) => (
        <Box 
          key={item}
          title={item}
           m="0 10px">
        <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> 
        </Box> 
    ))}
</ScrollMenu>
  )
}

export default HorizontalScrllbar
