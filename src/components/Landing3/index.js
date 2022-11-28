import React from 'react'
import "./styles.css";
import img1 from '../../SvgCollections/bootstrap.svg';
import img2 from '../../SvgCollections/file.svg';
import img3 from '../../SvgCollections/mobile.svg';
import img4 from '../../SvgCollections/touch.svg';
import img5 from '../../SvgCollections/html5.svg';
import img6 from '../../SvgCollections/nodejs.svg';
import img7 from '../../SvgCollections/sass.svg';
import img8 from '../../SvgCollections/js.svg';

import Cards2 from './Cards2';
function Landing3() {
  return (
    <div className="row12">
        <Cards2 src={img1} heading= "Built with Bootstrap 5" para="Silicon is the powerful front-end solution based on Bootstrap 5 — the world’s most popular responsive, mobile-first front-end component library."/>
        <Cards2 src={img2} heading= "Detailed Documentation" para="Download package includes the documentation that covers all crucial information about how to get started, customize template and components usage."/>
        <Cards2 src={img3} heading= "Mobile Freindly Interface" para="It's not a surprise that nowadays over 80% of users surf the inernet using their mobile devices. Silicon is 100% responsive and optimized for small touch screens."/>
        <Cards2 src={img4} heading= "Touch-Enabled Sliders" para=" In the era of touch screens it's important to ensure great user experience on mobile, especially when it comes to such frequently used interface component as slider."/>
        <Cards2 src={img5} heading= "W3C Valid HTML Code" para="All HTML files are checked via W3C validator to ensure 100% valid code. As you probably know invalid HTML limits innovation, but Silicon is innovative at its core."/>
        <Cards2 src={img6} heading= "Kick-Start Your Development" para="Start your development process fast and easy with Node.js and Gulp setup. Configuration files are included in download package. Full tasks automation."/>
        <Cards2 src={img7} heading= "Easy to Customize with Sass" para="Silicon is built using Sass. Easily change colors, typography and much more. It is the most mature, stable, and powerful CSS extension language in the world."/>
        <Cards2 src={img8} heading= "Future Proof Java-Script" para="Silicon core scripts as well as all dependencies are written in vanilla JS. And now with Bootstrap 5 we finally drop jQuery and use ES6 modules."/>


 
    </div>
  )
}

export default Landing3