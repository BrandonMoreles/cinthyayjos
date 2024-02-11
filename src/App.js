import React from 'react';
import './App.css';
import Home from "./Components/Home.js"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'typeface-great-vibes';
import 'typeface-caveat';
import 'typeface-alex-brush';
import 'animate.css';

function App() {
  return (
  <Router basename='/cinthyayjos'>
    <Routes>  
      <Route path='/*' element={<Home/>}/>
      </Routes>  
  </Router>
  
        
      
  );
}

export default App;
