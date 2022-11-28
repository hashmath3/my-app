import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Popovers3() {
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
 <span> Portfolio</span> <KeyboardArrowDownIcon/></div>
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
    <Typography sx={{ p: 1 }}>Grid View</Typography>
    <Typography sx={{ p: 1 }}>List View</Typography>
    <Typography sx={{ p: 1 }}>Slider View</Typography>
    <Typography sx={{ p: 1 }}>Single Project</Typography>
 

  </Popover></div>
  )
}

export default Popovers3