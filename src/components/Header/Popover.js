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
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
  return (
    <div> <Typography
    aria-owns={open ? 'mouse-over-popover' : undefined}
    aria-haspopup="true"
    onMouseEnter={handlePopoverOpen}
    onMouseLeave={handlePopoverClose}
  >
 <div className='down'>
 <span> Landing</span> <KeyboardArrowDownIcon/></div>
  </Typography>
  <Popover
    id="mouse-over-popover"
    sx={{
      pointerEvents: 'none',
    }}
    open={open}
    anchorEl={anchorEl}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    onClose={handlePopoverClose}
    disableRestoreFocus
  >  <div className='pop-row2'>
  <div>
    
  <img src={ReactLogo} alt="React Logo" />
</div>
<div>
    
        <p>Template intro Page</p>
        <p>Mobile App Showcase</p>
        <p>Mobile App Showcase v.2</p>
        <div style={{display:"flex" , gap:"5px"}}> <p>Startup</p>
        <button style={{backgroundColor:"#22c55e" , color:"white" ,width:"50px", borderColor:"#22c55e" , borderRadius:"4px"}}>New</button></div>
        <p>Saas v.1</p>
        <p>Saas v.1 </p>
        <p>Saas v.1 </p>
        <p>Financial Consulting </p>
        <p>Medical</p>

</div>
<div>
   
        <p>IT(Software) Company</p>
        <p>Conference </p>
        <p>Digital Agency</p>
        
        <p>Blog Homepage</p>
       
        

</div>
</div>

 

  </Popover></div>
  )
}

export default Popovers