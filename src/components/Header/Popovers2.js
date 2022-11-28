import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Popovers2() {
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
 <span> Pages</span> <KeyboardArrowDownIcon/></div>
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
  >
    <div className='pop-row2'>
        <div>
            <p><b>About Us</b></p>
            <br></br>
              <p>About v.1</p>
              <p>About v.2</p>
              <br></br>
              <p><b>Services</b></p>
              <br></br>
              <p>Services v.1 </p>
              <p>Services v.2 </p>
              <p>Services Details v.1 </p>
              <p>Services Details v.2 </p>
   
    </div>
    <div>
            <p><b>Blog</b></p>
            <br></br>
              <p>List View with Sidebar</p>
              <p>Grid View with Sidebar</p>
              <p>List View no Sidebar</p>
              <p>Grid View no Sidebar</p>
              <p>Services v.2 </p>
              <p>Simple Feed </p>
              <p>Podcast </p>
   
    </div>
    <div>
            <p><b>Pricing</b></p>
            <br></br>
              <p>Pricing Page</p>
              <br></br>
              <p><b>Contacts</b></p>
              <br></br>
              <p>Contacts v.1</p>
              <p>Contacts v.2 </p>
              <p>Contacts v.3 </p>
              <br></br>
              <p><b>Specialty</b> </p>
              <br></br>
              <p>404 Error v.1</p>
              <p> 404 Error v.2 </p>
              
   
    </div>
    </div>

  </Popover></div>
  )
}

export default Popovers2