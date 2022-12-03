import React from 'react'
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Switch } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./styles.css";
export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };





  
  return (
    <div>
      <div className="menu-button">
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon style={{ color: "black" }} />
        </IconButton>
      </div>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}  PaperProps={{
    sx: { width: "60%" },
  }} sx={{width:"350px", }}>
        <div className="drawer-div" >
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      > 
            <p className="links"><div className='down'>
 <span> Landing</span> <KeyboardArrowDownIcon sx={{color:"black"}} /></div></p>
               </Button> <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open1}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Template intro Page</MenuItem>
        <MenuItem onClick={handleClose}>Mobile App Showcase</MenuItem>
        <MenuItem onClick={handleClose}>Mobile App Showcase v.2</MenuItem>
        <MenuItem onClick={handleClose}>Saas v.1</MenuItem>
        <MenuItem onClick={handleClose}>Saas v.1</MenuItem>
        <MenuItem onClick={handleClose}>Saas v.1</MenuItem>
        <MenuItem onClick={handleClose}>Financial Consulting</MenuItem>
        <MenuItem onClick={handleClose}>Mobile App Showcase v.2</MenuItem>
        <MenuItem onClick={handleClose}>Mobile App Showcase v.2</MenuItem>
        <MenuItem onClick={handleClose}>Mobile App Showcase v.2</MenuItem>
        <MenuItem onClick={handleClose}>Mobile App Showcase v.2</MenuItem>
        <MenuItem onClick={handleClose}>Mobile App Showcase v.2</MenuItem>
        <MenuItem onClick={handleClose}>Blog Homepage</MenuItem>
      </Menu>
             <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
            <p className="links"><div className='down'>
 <span> Pages</span> <KeyboardArrowDownIcon sx={{color:"black"}} /></div></p>
               </Button> <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open1}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Template intro Page</MenuItem>
        <MenuItem onClick={handleClose}>Mobile App Showcase</MenuItem>
        <MenuItem onClick={handleClose}>Mobile App Showcase v.2</MenuItem>
        <MenuItem onClick={handleClose}>Saas v.1</MenuItem>
        <MenuItem onClick={handleClose}>Saas v.2</MenuItem>
        <MenuItem onClick={handleClose}>Saas v.3</MenuItem>
        <MenuItem onClick={handleClose}>Financial Consulting</MenuItem>
        <MenuItem onClick={handleClose}>Mobile App Showcase v.2</MenuItem>
        <MenuItem onClick={handleClose}>Mobile App Showcase v.2</MenuItem>
        <MenuItem onClick={handleClose}>Mobile App Showcase v.2</MenuItem>
        <MenuItem onClick={handleClose}>Mobile App Showcase v.2</MenuItem>
        <MenuItem onClick={handleClose}>Mobile App Showcase v.2</MenuItem>
        <MenuItem onClick={handleClose}>Blog Homepage</MenuItem>
      </Menu>
          {/* <a href="/about-us">
            <p className="links">About Us</p>
          </a> */}
               <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      > 
            <p className="links"><div className='down'>
 <span> Portfolio</span> <KeyboardArrowDownIcon sx={{color:"black"}} /></div></p>
              </Button> <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        // open={open1}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         <MenuItem onClick={handleClose}>Template intro Page</MenuItem>
        <MenuItem onClick={handleClose}>Mobile App Showcase</MenuItem>
        <MenuItem onClick={handleClose}>Mobile App Showcase v.2</MenuItem>
        <MenuItem onClick={handleClose}>Saas v.1</MenuItem> 
      
      </Menu>
      <div className='down12'>
      
      <div><Button
       
      > 
            <p className="links"><div className='down1'>
 <span> Support    </span> </div></p>
             </Button></div>
        <div>  <Button
      
      > 
            <p className="links"><div className='down1'>
 <span>Docs</span> </div></p>
            </Button></div>
            </div>
         
        </div>
       
       
        <div className="drawer-last" style={{bottom:"10px" ,marginTop:"350px" , height:"150px"}}>
        <div  style={{ marginBottom:"40px",  }}> <hr></hr></div>
        <Button variant="contained"  size="medium" sx={{"&:hover": { backgroundColor: " #4044ee" },
        padding: "10px 19px",
        marginLeft:"30px",
        borderRadius: 1.5
        
      }} startIcon={<ShoppingCartOutlinedIcon/>}>Buy Now
      </Button>
        </div>
      </Drawer>
    </div>
  );
}