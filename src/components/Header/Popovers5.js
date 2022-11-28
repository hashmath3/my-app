import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function Popovers5() {
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
    Docs
  </Typography>
  <Popover
   
  >
  
 

  </Popover></div>
  )
}

export default Popovers5