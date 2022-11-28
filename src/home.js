import React from 'react'
import Landing2 from './components/Landing2';

import Landings from './components/Landing';
import LandingTitle from './components/LandingTitle';
import LandingImages from './components/LandingImages';
import Landing3 from './components/Landing3';
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';


function Home() {
  let mybutton = document.getElementById("top-button");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    
   
  }

  return (
    <div>
        <div><Landings/> </div>
        <div class="spacer"></div>
        <div >  <Landing2/></div>
        <div  id='landing-pages' class="spacer1"></div>
        <div><LandingTitle text="Landing Pages"/></div>
       <div className='sub'> <p>Choose from pre-built layouts of our unique landing pages</p></div>
        <div><LandingImages/></div>
        <div class="spacer1"></div>
        <div><LandingTitle text="More Silicon Features"/></div>
        <div class="spacer"></div>
<div><Landing3 svg=""/></div>
<div class="spacer1"></div>
<ExpandLessOutlinedIcon
            className="top-button"
            id="top-button"
            onClick={() => {
              topFunction();
            }}
          />

    
    </div>
  )
}

export default Home