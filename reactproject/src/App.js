import React from 'react';
import './App.css';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import {Switch,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <Switch>
  <Route exact path="/" component={Signup }/>
  <Route exact path="/Login" component={Login}/>
  </Switch>
    </div>
  );
}

export default App;
