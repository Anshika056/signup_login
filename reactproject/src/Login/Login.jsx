import React, { useState } from "react";
import "./Login.css"
import { Link } from "react-router-dom";



function Login(){

    const [userData , setUserData] = useState({                //userdata=currentdata and setuserdata=updated data
        email:"",                                                 //inital state in usestate
        password:"",                                             //inital stage of signin form
       });
    return(
        <>
        <div className="container">
            <div className="login-box">
                <h2>Login/Sign in </h2>
        <div className="login-email">
        <p>Enter Email-id</p>
        <input 
            type="text"
            name="email"
            placeholder="Enter your valid email-id"
        />
        </div>
        <div className="login-password">
        <p>Enter Password</p>
        <input
            type="password"
            name="password"
            placeholder="Enter your password"
            />
        </div>
     <div className="errorbox"></div>
     <div className="login-button">
         <button>Login</button>
     </div>
     <div className="sign-inlink">Not registered? <span>Create an account<Link to="/signup"></Link> 
          </span></div>

        </div>

        </div>
    
     </>



    )
}
export default Login;