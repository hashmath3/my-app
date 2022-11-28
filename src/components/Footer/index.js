import React from 'react'
import "./styles.css";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';




function Footer() {
  return (
    <div className='footer'>
             <hr  style={{
          background: 'black',
         
        }} />
        <div className='footer-heading'>
            <h2>
                <span>Subscribe to Our Newsletter</span>
            </h2>
        </div>
        <div className="search-wrapper">
      <div className="search-input">
    
        <TextField id="outlined-basic"   placeholder="Your email"
        
          InputProps={{
            style: {
              fontSize: 14,
              height: 42,
              width: 505,},
          startAdornment: (
            <InputAdornment position="start">
                 <EmailOutlinedIcon sx={{ color: "var(--grey)" }} />
            </InputAdornment>
          ),
        }} variant="outlined" />
        <Button variant="contained"      sx={{
       
          height:"41px",
          width:"128px",
          backgroundColor: "#6366f1" 
          
            
          }}>Subscribe</Button>
      </div>
    </div>
    <div className='footer-line'>
    
        <p>© All rights reserved. Made with <FavoriteBorderIcon/> by Hashmath </p>
       
        
       
        
    </div>
    </div>
  )
}

export default Footer