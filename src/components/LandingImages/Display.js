import React from 'react'
import "./styles.css";
function Display({image ,text}) {
  return (
    <div className='images'>
        <img src={image} alt="React Logo" />
        <h2>{text}</h2>
    </div>
  )
}

export default Display