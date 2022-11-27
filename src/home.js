import React from 'react'
import Landing2 from './components/Landing2';

import Landings from './components/Landing';
import LandingTitle from './components/LandingTitle';
import LandingImages from './components/LandingImages';
import Landing3 from './components/Landing3';


function Home() {
  return (
    <div>
        <div><Landings/> </div>
        <div class="spacer"></div>
        <div >  <Landing2/></div>
        <div class="spacer1"></div>
        <div><LandingTitle text="Landing Pages"/></div>
        <p>Choose from pre-built layouts of our unique landing pages</p>
        <div><LandingImages/></div>
        <div class="spacer1"></div>
        <div><LandingTitle text="More Silicon Features"/></div>
<div><Landing3 svg=""/></div>
    
    </div>
  )
}

export default Home