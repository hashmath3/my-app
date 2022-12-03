import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ReactLogo from '../../assests/navbarpic.webp';

function Popovers() {
 
  return (
    <div>
    <div class="dropdown">
  <button class="dropbtn"><div className='down'>
 <span> Landing</span> <span className='arrowdown'  ><KeyboardArrowDownIcon sx={{color:"var(--black)"}} /></span>
 <span className='arrowup'><KeyboardArrowUpIcon sx={{color:"var(--black)"}} /></span>
 </div></button>
  <div class="dropdown-content">
  <div className='pop-row2'>
  <div>
    
  <img src={ReactLogo} alt="React Logo" />
</div>
<div>
    
        <span className='drop-item'>Template intro Page</span>
        <span className='drop-item'>Mobile App Showcase</span>
        <span className='drop-item'>Mobile App Showcase v.2</span>
        <div style={{display:"flex" }}> <span style={{width:"100px"}} className='drop-item'>Startup</span>
        <button style={{backgroundColor:"#22c55e" , color:"white" ,width:"50px", height:"25px", borderColor:"#22c55e" , borderRadius:"4px" ,marginLeft:"-10px"}}>New</button></div>
        <span className='drop-item'>Saas v.1</span>
        <span className='drop-item'>Saas v.1 </span>
        <span className='drop-item'>Saas v.1 </span>
        <span className='drop-item'>Financial Consulting </span>
        <span className='drop-item'>Medical</span>

</div>
<div>
   
        <span className='drop-item'>IT(Software) Company</span>
        <span className='drop-item'>Conference </span>
        <span className='drop-item'>Digital Agency</span>
        
        <span className='drop-item'>Blog Homepage</span>
       
        

</div>
</div>
  </div>
</div>
    

</div>


 

  )
}

export default Popovers