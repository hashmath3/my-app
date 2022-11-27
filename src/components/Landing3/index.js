import React from 'react'
import "./styles.css";
import ReactLogo from '../../SvgCollections/bootstrap.svg';
function Landing3() {
  return (
    <div className="row1">
    <div className="column-12">
        <div className='square'>
    <img  className='svg' src={ReactLogo} alt="React Logo" /></div>
<h4>Built with Bootstrap 5</h4>

<p>Silicon is the powerful front-end solution based on Bootstrap 5 — the world’s most popular responsive, mobile-first front-end component library.</p>
    </div>
    </div>
  )
}

export default Landing3