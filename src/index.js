import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'
console.log("holas")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Router> 
                <App />
        </Router>
       

);


