import React, {useContext} from 'react';
import {Box, Typography} from '@mui/material';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import leftArrow from '../assets/icons/left-arrow.png';
import rightArrow from '../assets/icons/right-arrow.png';
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard';


const HorizontalScrllbar = ({data, bodyPart, setBodyPart, bodyParts }) => {
//  console.log(data);
 
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
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
           m="0 10px">
       {bodyParts  ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/> : <ExerciseCard exercise={item} />}
        </Box> 
    ))}
</ScrollMenu>
  )
}

export default HorizontalScrllbar
