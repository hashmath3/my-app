import React from 'react'
import Display from './Display'
import image1 from '../../assests/app-showcase.jpg';
import image2 from '../../assests/saas-v1.jpg';
import image3 from '../../assests/saas-v2.jpg';
import image4 from '../../assests/financial.jpg';
import image5 from '../../assests/medical.jpg';
import image6 from '../../assests/digital-agency.jpg';
import image7 from '../../assests/conference.jpg';
import image8 from '../../assests/software-company.jpg';
import image9 from '../../assests/blog-homepage.jpg';
import "./styles.css";
function LandingImages() {
  return (
    <div className='images1'>
        <Display image={image1} text="Mobile App Showcase"/>
        <Display image={image2} text="SaaS v.1"/>
        <Display image={image3} text="SaaS v.2"/>
        <Display image={image4} text="Financial Consulting"/>
        <Display image={image5} text="Medical"/>
        <Display image={image6} text="Digital Agency"/>
        <Display image={image7} text="Conference"/>
        <Display image={image8} text=" IT(Software) Company"/>
        <Display image={image9} text="Blog Homepage"/>

       
    </div>
   
  )
}

export default LandingImages