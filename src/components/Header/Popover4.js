import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Popovers4() {
   
  return (
    <div><div class="dropdown">
    <button class="dropbtn"><div className='down'>
 <span> Support</span><span className='arrowdown'  ><KeyboardArrowDownIcon sx={{color:"var(--black)"}} /></span>
 <span className='arrowup'><KeyboardArrowUpIcon sx={{color:"var(--black)"}} /></span>
 </div></button>
    <div class="dropdown-content4">
   
    </div>
  </div>
 
    
</div>
  )
}

export default Popovers4