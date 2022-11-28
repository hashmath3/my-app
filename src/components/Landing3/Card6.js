import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-solid-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
function Card6( {heading, para }) {
    return (
        <div className="row1">
        <div className="column-12">
            <div className='square'>
          
         
            <FontAwesomeIcon icon={faNodeJs} /></div>
            <div className='card-para'>
    <h4>{heading}</h4>
    <br></br>
    
    <p>{para}</p>
        </div>
        </div></div>
      )
}

export default Card6