import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Popovers2() {
  
  return (
    <div> 
   <div class="dropdown">
  <button class="dropbtn"><div className='down'>
 <span> Pages</span> <KeyboardArrowDownIcon sx={{color:"black"}} /></div></button>
  <div class="dropdown-content  dropdown-content2 ">
  <div className='pop-row2'>
<div>
     <span ><b>About Us</b></span>
  
       <span className='drop-item'>About v.1</span>
       <span className='drop-item'>About v.2</span>
      <br></br>
       <span className='drop-item'><b>Services</b></span>
      <br></br>
       <span className='drop-item'>Services v.1 </span>
       <span className='drop-item'>Services v.2 </span>
       <span className='drop-item'>Services Details v.1 </span>
       <span className='drop-item'>Services Details v.2 </span>

</div>
<div>
     <span ><b>Blog</b></span>
   
       <span className='drop-item'>List View with Sidebar</span>
       <span className='drop-item'>Grid View with Sidebar</span>
       <span className='drop-item'>List View no Sidebar</span>
       <span className='drop-item'>Grid View no Sidebar</span>
       <span className='drop-item'>Services v.2 </span>
       <span className='drop-item'>Simple Feed </span>
       <span className='drop-item'>Podcast </span>

</div>
<div>
     <span ><b>Pricing</b></span>
    
       <span className='drop-item'>Pricing Page</span>
      <br></br>
       <span className='drop-item'><b>Contacts</b></span>
      <br></br>
       <span className='drop-item'>Contacts v.1</span>
       <span className='drop-item'>Contacts v.2 </span>
       <span className='drop-item'>Contacts v.3 </span>
      <br></br>
       <span ><b>Specialty</b> </span>

       <span className='drop-item'>404 Error v.1</span>
       <span className='drop-item'> 404 Error v.2 </span>
      

</div>
</div>
  </div>
</div>
</div>
  )
}

export default Popovers2

