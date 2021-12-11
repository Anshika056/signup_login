const User = require("../models/userSchema");
const Users = require("../models/userSchema");
require("../database/connect");

exports.signup=async (req,res)=>{
   const {username,email,password,retypepassword} = req.body;

   if(!username || !email || !password || !retypepassword ){
       res.status(400).json({message:"enter all the details"});
   }
   console.log("user check");
   try{
     
    const userexists = await User.findOne({email});
    if(userexists){
        res.send("user already exists");
    } elseif (password != retypepassword)
    {
        res.send("password are not same");
    }
    const users = new User ({username,email,password,retypepassword});
    const signup = await users.save();
    console.log(signup)
     
    if(signup){
        res.status(200).json({message:"user has been Signed up!"});
    }
    else{
        res.send("error!");
    }

   }catch(err){
     console.log(err);
   }
} 