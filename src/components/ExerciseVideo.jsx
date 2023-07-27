import React from 'react';
import {Typography, Stack} from '@mui/material';


const ExerciseVideo = ({exerciseVideos, name}) => {
  // console.log(exerciseVideos)

  if(!exerciseVideos) return "Loading..."
  return (
    <Stack  margin={{xs:"20px", lg:"0 50px"}}
     justifyContent="flex-start"  mt={{xs:"40px", lg:"120px"}}
      >
       <Typography variant="h4" color="#fff" textTransform="capitalize" mb={{xs:"10px", lg:"40px"}}>
          Watch <span style={{color:"#e85217"}}>{name}</span> exercise videos
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={{xs:"20px", lg:"40px"}}
         alignItems="center">

          {exerciseVideos.slice(0,6).map((item) => (
          
            //  console.log(item)
            <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              key={item.video.videoId}
              className='exercise-video'
              sx={{textDecoration:"none", color:"#fff"}}
              rel="noopener noreferrer"
              >
              <img src={item?.video?.thumbnails[0]?.url} alt={item.video.title}/>
              <Typography variant="h6" ml="20px">{item?.video?.title.slice(0, 30)}</Typography>
              <Typography variant="body2" ml="20px">{item?.video?.channelName}</Typography>
            </a>
          ))}
        </Stack>
    </Stack>
  )
}

export default ExerciseVideo
