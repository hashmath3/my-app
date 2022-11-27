import "./styles.css";
import React from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';



import CardMedia from '@mui/material/CardMedia';


function Cards({image}) {
  const styles = {
    media: {
      height: 100,
      paddingTop: '56.25%', // 16:9,
      marginTop:'30'
    }
  };
  return (
    <div>
        <div className="row">
        <div className="column-1">
      
        <img src={image} alt="React Logo" />
        </div>
        <div className="column-2"></div>
        <div className="column-3"></div>
        <div className="column-4"></div>
        </div>
    </div>
  )
}

export default Cards