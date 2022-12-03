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
            <h1>Silicon</h1>
           
        </div>
        <div className='landing-sub'>
           <p><span>Multipurpose Business /<br></br>
           Technology Template</span></p>
        


        </div>
        
        <div className='landing-image'>
        <img src={ReactLogo} alt="React Logo" />
        </div>
        <div className='symbol'><a className='symbol' href='#landing-pages'>
        <ExpandCircleDownRoundedIcon sx={{    width: "2.75rem",
    height: "2.75rem",
    padding: "0"}}
      /><div> <span >View Landings</span></div></a>
        </div>
       </div>
        <div className='landing-second'><img src={Image} alt="React Logo" /></div>
        <div className='landing-third'><img src={Image2} alt="React Logo" /></div>
    </div>
    </>
  )
}

export default Landings