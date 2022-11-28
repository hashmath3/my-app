import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ReactLogo from '../../assests/navbarpic.webp';

function Popovers() {
 
  return (
    <div>
    <div class="dropdown">
  <button class="dropbtn"><div className='down'>
 <span> Landing</span> <KeyboardArrowDownIcon sx={{color:"black"}} /></div></button>
  <div class="dropdown-content">
  <div className='pop-row2'>
  <div>
    
  <img src={ReactLogo} alt="React Logo" />
</div>
<div>
    
        <p className='drop-item'>Template intro Page</p>
        <p className='drop-item'>Mobile App Showcase</p>
        <p className='drop-item'>Mobile App Showcase v.2</p>
        <div style={{display:"flex" , gap:"2px"}}> <p className='drop-item'>Startup</p>
        <button style={{backgroundColor:"#22c55e" , color:"white" ,width:"50px", borderColor:"#22c55e" , borderRadius:"4px"}}>New</button></div>
        <p className='drop-item'>Saas v.1</p>
        <p className='drop-item'>Saas v.1 </p>
        <p className='drop-item'>Saas v.1 </p>
        <p className='drop-item'>Financial Consulting </p>
        <p className='drop-item'>Medical</p>

</div>
<div>
   
        <p className='drop-item'>IT(Software) Company</p>
        <p className='drop-item'>Conference </p>
        <p className='drop-item'>Digital Agency</p>
        
        <p className='drop-item'>Blog Homepage</p>
       
        

</div>
</div>
  </div>
</div>
    

</div>


 

  )
}

export default Popovers