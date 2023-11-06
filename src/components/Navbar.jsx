import React from 'react';
import {Stack, Typography} from '@mui/material';
import  Logo from '../assets/images/Logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <Stack direction="row"  
       alignItems="center"
       justifyContent="space-between"
       color="#fff"
       margin={{xs:"40px"}}
       >
      <Link to='/'>
       <img src={Logo} alt="logo" style={{width: "50px", height:"50px"}}/>
      </Link>
      
      <Stack 
         direction="row"
         gap={4}
         sx={{alignItems:"center"}}
         >
         <Link to="/" >
          <Typography sx={{color:"#fff", fontSize:"18px", '&:hover': {color: '#f06d22'}}}>Home</Typography>
         </Link>

         <a href="#exercise"
          style={{color:"#fff", textDecoration:"none", fontSize:"20px", marginTop:"-5px", hover:{color:"#f06d22"}}}
         >Exercise</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
