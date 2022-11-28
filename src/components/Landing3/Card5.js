import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-solid-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons';
function Card5({heading,src ,para ,fg}) {
    return (
        <div className="row1">
        <div className="column-12">
            <div className='square'>
            <img  className='svg' src={src} alt="React Logo" /></div>
        
            <div className='card-para'> 
    <h4>{heading}</h4>
    <br></br>
    
    <p>{para}</p>
        </div>
        </div>
        </div>
      )
}

export default Card5