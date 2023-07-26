import React, {useEffect, useState} from 'react';
import {Stack} from '@mui/material';
import { ExerciseDetail, ExerciseVideo, SimilarExercise } from '../components';
import { exerciseOptions, fetchExercise , YoutubeOptions} from '../utils/FetchData';
import { useParams } from 'react-router-dom';


const ExercisePage = () => {
  const [ExerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [exercisebyTarget, setExercisebyTarget] = useState([]);
  const [exercisebyEquipment, setExercisebyEquipment] = useState([]);

  const { id }  = useParams();
   
  useEffect(() => {

    const ExercisebyId = async () =>{
      const fetchExercisebyId = await fetchExercise(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetails(fetchExercisebyId)
   
      const fetchYoutubeVideo = await fetchExercise(`https://youtube-search-and-download.p.rapidapi.com/search?query=${fetchExercisebyId.name} exercise`, YoutubeOptions)
       setExerciseVideos(fetchYoutubeVideo.contents)

      const ExercicebyTarget = await fetchExercise(`https://exercisedb.p.rapidapi.com/exercises/target/${fetchExercisebyId.target}`, exerciseOptions)
      setExercisebyTarget(ExercicebyTarget)

      const ExercicebyEquipment = await fetchExercise(`https://exercisedb.p.rapidapi.com/exercises/target/${fetchExercisebyId.equipment}`, exerciseOptions)
      setExercisebyEquipment(ExercicebyEquipment)
      // console.log(ExercicebyTarget)
    }


    ExercisebyId();
  }, [id])

  return (
    <Stack>
      <div className='blur'></div>
      <ExerciseDetail ExerciseDetails={ExerciseDetails}/>
      <ExerciseVideo  exerciseVideos={exerciseVideos} name = {ExerciseDetails.name}/>
      <SimilarExercise exercisebyTarget={exercisebyTarget} exercisebyEquipment={exercisebyEquipment}/>
    </Stack>
  )
}

export default ExercisePage
