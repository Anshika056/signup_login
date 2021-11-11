import React from "react";
import "./Signup.css"
import { Link } from "react-router-dom";
function Signup(){
    return(
        <>
    <div className="container">
    <div className="signup-box">
        <h2>Sign Up</h2>
    <div className="username">
    <p>User Name</p>
 	<input 
         type="text" 
         name="username" 
         placeholder="Enter Username"/>
    </div>
 <div className="email">
 	<p>Email</p>
 	<input 
         type="email" 
         name="email" 
          placeholder="Enter Email id"/>
   </div>
   <div className="password">
 	<p>Password</p>
       	<input 
         type="password" 
         name="password" 
         placeholder="password"/>
     </div>
    <div className="password">
 	<p>Retype Password</p>
 	<input 
         type="password"
         name="repwd" 
         placeholder="Re-Enter password"/>
     </div>
    
    <div id="errorbox"></div>
    
    <div className="signupbutton">
        <button>Sign-up</button>
    </div>
    <div className="login-link">
      Already registered? Login!
      <Link to="./Login/Login"></Link>
    </div>

    </div>
    </div>



        </>
    )
}
export default Signup