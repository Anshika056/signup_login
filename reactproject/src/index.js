import React from 'react';
import Reactdom from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom" 


Reactdom.render(
  <BrowserRouter><App/></BrowserRouter>, 
  document.getElementById("root"));



