import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-solid-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons';
function Cards2({heading,src ,para ,fg}) {
  return (
    <div className="row1">
    <div className="column-12">
        <div className='square'>
      
    <img  className='svg' src={src} alt="React Logo" /></div>
    <FontAwesomeIcon icon={fg} />
    <div className='card-para'>
<h4>{heading}</h4>
<br></br>

<p style={{marginBottom:"30px"}}>{para}</p>
    </div>
    </div>
    </div>
  )
}

export default Cards2