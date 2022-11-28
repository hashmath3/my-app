import React from 'react'
import ReactLogo from '../../assests/logo.svg';
import "./styles.css";

import Button from '@mui/material/Button';
import Selected from './Selected';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import TemporaryDrawer from './Drawer'
import Popovers from './Popover';
import Popovers2 from './Popovers2';
import Popovers3 from './Popovers3';
import Popovers4 from './Popover4';
import Popovers5 from './Popovers5';
function Navbar2() {
  return (  <div className="navbar2">
     
  <div className="navbar2-first">
    
  <img src={ReactLogo} alt="React Logo" />
  <h4>Silicon</h4>

  
   
   
    </div>
    <div className="navbar2-second">
    <Popovers/>
    <Popovers2/>
    <Popovers3/>
    <div style={{marginTop:"-5px", marginLeft:"-19px"}}>  <Popovers4/></div>
   <div style={{marginTop:"-5px" }}><Popovers5/></div>
    
    <div className="menu-divs">
        <TemporaryDrawer/>
        </div>

   
    </div>
    <div className='navbar2-third'>
      {/* <span>Light</span> */}
    
      <Selected/>
     
    

      <Button variant="contained"  size="medium" sx={{"&:hover": { backgroundColor: " #4044ee" },
        padding: "10px 19px",
      
        borderRadius: 1.5
        
      }} startIcon={<ShoppingCartOutlinedIcon/>}>Buy Now
      </Button>
      
     
    </div>

  </div>

);
}

export default Navbar2