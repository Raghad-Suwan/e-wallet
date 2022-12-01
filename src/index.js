

import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';              //import react library 
import ReactDOM from 'react-dom/client';//import reactdom library 
import App from './App';                //import main file (App) all work on it
 import About from './component/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
);