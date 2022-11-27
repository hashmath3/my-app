import React from 'react'
import "./styles.css";
import ReactLogo from '../../assests/dark.svg';
import Image from '../../assests/screens01.png'
import Image2 from '../../assests/screens02.png'
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
function Landings() {
  return (
    <>
    <div className='landing'>
       <div className='landing-first'>
        <div className='landing-title'>
            <h1><span>Silicon</span></h1>
        </div>
        <div>
           <p><span>Multipurpose Business /<br></br>
           Technology Template</span></p>
        


        </div>
        <div>
        <img src={ReactLogo} alt="React Logo" />
        </div>
        <div>
       <ExpandCircleDownRoundedIcon/> View Landings
        </div>
       </div>
        <div className='landing-second'><img src={Image} alt="React Logo" /></div>
        <div className='landing-third'><img src={Image2} alt="React Logo" /></div>
    </div>
    </>
  )
}

export default Landings