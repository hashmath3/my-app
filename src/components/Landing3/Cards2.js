import React from 'react'

function Cards2({heading,src ,para}) {
  return (
    <div className="row1">
    <div className="column-12">
        <div className='square'>
      
    <img  className='svg' src={src} alt="React Logo" /></div>
<h4>{heading}</h4>

<p>{para}</p>
    </div>
    </div>
  )
}

export default Cards2