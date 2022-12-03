import './App.css';
import Landing2 from './components/Landing2';
import Footer from './components/Footer';
import Header from './components/Header';
import Landings from './components/Landing';
import Home from './home';
import React, { useEffect } from "react";
function App() {
  useEffect(() =>   {document.body.classList.toggle("light")
   },[])

  return (
    <div className="App">
     <Header/>
   <Home/>
     <Footer/>
    </div>
  );
}

  

export default App;
