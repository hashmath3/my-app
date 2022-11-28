import React from 'react'
import { Switch } from "@mui/material";
import "./styles.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ReactLogo from '../../assests/image.svg';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Navbar1() {
    return (
        <div className="navbar">
     
        <div className="first">
        <img src={ReactLogo} alt="React Logo" />
        
      
          </div>
          <div className="menu-div">
        
 
      <Button variant="contained" 
      sx={{"&:hover": { backgroundColor: " #82b440" },
        
        backgroundColor:"#82b440",
        width:"105px",

      }} >
        Buy now
      </Button>
     

          </div>
        </div>
     
      );
    }

export default Navbar1