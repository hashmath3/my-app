import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Popovers3() {
   
  return (
    <div> 
  <div class="dropdown dropdown3">
  <button class="dropbtn"> <div className='down'>
 <span> Portfolio</span><span className='arrowdown'  ><KeyboardArrowDownIcon sx={{color:"var(--black)"}} /></span>
 <span className='arrowup'><KeyboardArrowUpIcon sx={{color:"var(--black)"}} /></span></div></button>
  <div class="dropdown-content dropdown-content3">
  <div className='pop-row2'>
<div>
 <span className='drop-item'>Grid View</span>
 <span className='drop-item'>List View</span>
 <span className='drop-item'>Slider View</span>
 <span className='drop-item'>Single Project</span>
  </div>
</div>
</div>
  </div>
  </div>
  )
}

export default Popovers3
