import React from 'react';
import './App.css';
import Landing2 from './components/Landing2';
import Footer from './components/Footer';
import Header from './components/Header';
import Landings from './components/Landing';
import Home from './home';

function App() {


  return (
    <div className="App">
     <Header/>
   <Home/>
     <Footer/>
    </div>
  );
}

export default App;
// Use the given api to get the images and display on the browser such that when the user clicks the button the image should change randomly
// https://dog.ceo/api/breeds/image/random