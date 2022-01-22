import React ,{useState} from "react";
import "./login.css"
import { Link } from "react-router-dom";



function Login(){

   const [logindata, setLogin] = useState({                //userdata=currentdata and setuserdata=updated data
       email:"",                                                 //inital state in usestate
       password:"",                                             //inital stage of signin form
});

const setlogin=(e) =>{
    const {name,value} = e.target
    setLogin({...logindata,[name]:value});
}

       
const alertlogin=()=>{
    alert("login done");
}
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
            value={logindata.email}
            onChange={setlogin}
            placeholder="Enter your valid email-id"
        />
        </div>
        <div className="login-password">
        <p>Enter Password</p>
        <input
            type="password"
            name="password"
            value={logindata.password}
            onChange={setlogin}
            placeholder="Enter your password"
            />
        </div>
     <div className="errorbox"></div>
     <div className="login-button">
         <button onClick={alertlogin}>Login</button>
     </div>
     <div className="sign-inlink">
     Not registered? 
      <Link to="/">Create an account </Link></div>
        </div>
        </div>
    
     </>



    )
}
export default Login;