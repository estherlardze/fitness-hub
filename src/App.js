import React from 'react';
import ExercisePage from './pages/ExercisePage';
import Home from './pages/Home';
import {Box, Stack} from '@mui/material';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import { Navbar, Footer } from './components';


function App() {
  return (
    <Stack >
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Exercise/:id" element={<ExercisePage/>}/>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </Stack>
  );
}

export default App;
