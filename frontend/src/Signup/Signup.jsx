import React, { useState } from "react";
import "./Signup.css"
import "./validation"
import { Link } from "react-router-dom";
import validation from "./validation";


function Signup(){

    const [userdata,setuserData] = useState({                 //usesate is used to intake the change in feild value
        username:"",
        email:"",
        password:"",
        retypepassword:""
    });

     
    const setvalue=(e) =>{
      const {name,value} = e.target                 //destructure the field name and its value and put every field and its value in it and then change 
 
      setuserData({...userdata, [name]: value});    // setting the change in the field and its value in key pair value
          console.log(userdata)
     } 

     const [errors,setErrors] = useState({})         //usestate for the errors
     
          const sendData = async ()=>{
              setErrors(validation(userdata));
            //   setuserData({
            //     username: "",
            //     email: "",
            //     mobile: "",
            //     password: "",
            //     retypepassword: "",
            //   });
            //   alert("signup done");   
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
         autoComplete="off"
         name="username" 
         value={userdata.username}
         onChange={setvalue}
         placeholder="Enter Username"/>
        {errors.username && <p className="errorbox">{errors.username}</p>}
    </div>
 <div className="email">
 	<p>Email</p>
 	<input 
         type="email" 
         name="email" 
         autoComplete="off"
         value={userdata.email}
         onChange={setvalue}
        placeholder="Enter Email id"/>
         {errors.email && <p className="errorbox">{errors.email}</p>}
   </div>
   <div className="password">
 	<p>Password</p>
       	<input 
         type="password" 
         autoComplete="off"
         name="password" 
         value={userdata.password}
         onChange={setvalue}
         placeholder="password"/>
         {errors.password && <p className="errorbox">{errors.password}</p>}
     </div>
    <div className="password">
 	<p>Retype Password</p>
 	<input 
         type="password"
         autoComplete="off"
         name="retypepassword" 
         value={userdata.retypepassword}
         onChange={setvalue}
         placeholder="Re-Enter password"/>
         {errors.retypepassword && <p className="errorbox">{errors.retypepassword}</p>}
     </div>
    
    {/* <div id="errorbox"></div> */}
    
    <div className="signupbutton">
        <button onClick={sendData}>Sign-up</button>
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