import React, { useState } from "react";
import "./Signup.css"
import { Link } from "react-router-dom";


function Signup(){

    const [userdata,setuserdata] = useState({                 //usesate is used to intake the change in feild value
        username:"",
        email:"",
        password:"",
        retypepassword:""
    });
     
    const setvalue=(e) =>{
      const {name,value} = e.target                 //destructure the field name and its value and put every field and its value in it and then change 
 
      setuserdata({...userdata, [name]: value});    // setting the change in the field and its value in key pair value
          console.log(userdata)
     } 


     const alertsignup=()=>{
     alert("signup done");
        
    }
    return(
        <>
    <div className="container">
    <div className="signup-box">
        <h2>Sign Up</h2>
    <div className="username">
    <p>User Name</p>
 	<input 
         type="text" 
         autoComplete="false"
         name="username" 
         value={userdata.username}
         onChange={setvalue}
         placeholder="Enter Username"/>
    </div>
 <div className="email">
 	<p>Email</p>
 	<input 
         type="email" 
         name="email" 
         autoComplete="false"
         value={userdata.email}
         onChange={setvalue}
        placeholder="Enter Email id"/>
   </div>
   <div className="password">
 	<p>Password</p>
       	<input 
         type="password" 
         autoComplete="false"
         name="password" 
         value={userdata.password}
         onChange={setvalue}
         placeholder="password"/>
     </div>
    <div className="password">
 	<p>Retype Password</p>
 	<input 
         type="password"
         autoComplete="false"
         name="retypepassword" 
         value={userdata.retypepassword}
         onChange={setvalue}
         placeholder="Re-Enter password"/>
     </div>
    
    <div id="errorbox"></div>
    
    <div className="signupbutton">
        <button onClick={alertsignup}>Sign-up</button>
    </div>
    <div className="login-link">
      <Link to="/Login"> Already registered?  Login!</Link>
    </div>

    </div>
    </div>
        </>
    )
}
export default Signup