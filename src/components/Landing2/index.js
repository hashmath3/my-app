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
       <Cards image={image1}/>
       <Cards image={image2}/>
       <Cards image={image3}/>
       <Cards image={image4}/>
      
    </div>
  )
}

export default Landing2