import "./styles.css";
import React from 'react'

import image1 from '../../assests/image4.svg';
import image2 from '../../assests/image5.svg';
import image3 from '../../assests/image6.svg';
import image4 from '../../assests/image7.svg';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import Cards from "./Cards";
function Landing2() {
  return (
    <div className="Landing2-row">
       <Cards image={image1} text="Light/Dark Mode"/>
       <Cards image={image2} text="Figma Files Inculded"/>
       <Cards image={image3} text="100+ UI Flexible Sections"/>
       <Cards image={image4} text="Free Lifetime Updates"/>
      
    </div>
  )
}

export default Landing2