import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Popovers3() {
   
  return (
    <div> 
  <div class="dropdown dropdown3">
  <button class="dropbtn"> <div className='down'>
 <span> Portfolio</span> <KeyboardArrowDownIcon sx={{color:"black"}} /></div></button>
  <div class="dropdown-content dropdown-content3">
   
<Typography sx={{ p: 1 }}>Grid View</Typography>
<Typography sx={{ p: 1 }}>List View</Typography>
<Typography sx={{ p: 1 }}>Slider View</Typography>
<Typography sx={{ p: 1 }}>Single Project</Typography>
  </div>
</div>
  </div>
  )
}

export default Popovers3
