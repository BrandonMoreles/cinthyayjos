import React from 'react';
import './App.css';
import Home from "./Components/Home.js"
import {Route} from 'react-router-dom'
import 'typeface-great-vibes';
import 'typeface-caveat';
import 'typeface-alex-brush';
import 'animate.css';

function App() {
  return (
  <Route path='/*' component={<Home />}/>
        
      
  );
}

export default App;
