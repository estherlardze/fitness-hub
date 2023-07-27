import React from 'react';
import ExercisePage from './pages/ExercisePage';
import Home from './pages/Home';
import { Stack} from '@mui/material';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import './index.css'


function App() {
  return (
    <Stack className='App'>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/exercise/:id" element={<ExercisePage/>}/>
      </Routes>
    </Stack>
  );
}

export default App;
