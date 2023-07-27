import React from 'react';
import { Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => {
  return (
    <Stack sx={{ padding:"40px"}} justifyContent="center" alignItems="center" direction="row" gap="20px" mt={{xs:"20px", lg:"50px"}}>
      <img src={Logo} alt="logo" style={{width: "50px", height:"50px"}}/>
      <Typography variant="h5" color="#fff">Fitness hub</Typography>
      <div className='blur-bottom'></div>
    </Stack>
  )
}

export default Footer
