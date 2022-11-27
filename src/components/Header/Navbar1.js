import React from 'react'
import { Switch } from "@mui/material";
import "./styles.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ReactLogo from '../../assests/image.svg';

function Navbar1() {
    return (
        <div className="navbar">
     
        <div className="first">
        <img src={ReactLogo} alt="React Logo" />
        
         
         
          </div>
          <div className="menu-div">
        
 
      <Button variant="contained" 
      sx={{
        backgroundColor:"#82b440",
        width:"105px",
        
      }} >
        Buy Now
      </Button>
     

          </div>
        </div>
     
      );
    }

export default Navbar1