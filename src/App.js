import React from 'react';
import './App.css';
import Home from "./Components/Home.js"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'typeface-great-vibes';
import 'typeface-caveat';
import 'typeface-alex-brush';
import 'animate.css';

function App() {
  return (
  <BrowserRouter basename='/cinthyayjos'>
    <Routes>  
      <Route path='/*' component={<Home />}/>
      </Routes>  
  </BrowserRouter>
  
        
      
  );
}

export default App;
