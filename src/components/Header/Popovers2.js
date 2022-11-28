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
     <p ><b>About Us</b></p>
  
       <p className='drop-item'>About v.1</p>
       <p className='drop-item'>About v.2</p>
      <br></br>
       <p className='drop-item'><b>Services</b></p>
      <br></br>
       <p className='drop-item'>Services v.1 </p>
       <p className='drop-item'>Services v.2 </p>
       <p className='drop-item'>Services Details v.1 </p>
       <p className='drop-item'>Services Details v.2 </p>

</div>
<div>
     <p ><b>Blog</b></p>
   
       <p className='drop-item'>List View with Sidebar</p>
       <p className='drop-item'>Grid View with Sidebar</p>
       <p className='drop-item'>List View no Sidebar</p>
       <p className='drop-item'>Grid View no Sidebar</p>
       <p className='drop-item'>Services v.2 </p>
       <p className='drop-item'>Simple Feed </p>
       <p className='drop-item'>Podcast </p>

</div>
<div>
     <p ><b>Pricing</b></p>
    
       <p className='drop-item'>Pricing Page</p>
      <br></br>
       <p className='drop-item'><b>Contacts</b></p>
      <br></br>
       <p className='drop-item'>Contacts v.1</p>
       <p className='drop-item'>Contacts v.2 </p>
       <p className='drop-item'>Contacts v.3 </p>
      <br></br>
       <p ><b>Specialty</b> </p>

       <p className='drop-item'>404 Error v.1</p>
       <p className='drop-item'> 404 Error v.2 </p>
      

</div>
</div>
  </div>
</div>
</div>
  )
}

export default Popovers2

