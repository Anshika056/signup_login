const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
require("../database/connect");

exports.signup=async (req,res)=>{
   const {username,email,password,retypepassword} = req.body;

        if(!username || !email || !password || !retypepassword ){
              res.status(400).json({message:"enter all the details"});
        }
         //console.log("user check");
      try{ 
             const userexists = await User.findOne({email});
                 if(userexists){
                       res.send("user already exists");
                 }else if (password != retypepassword)
                   {
                       return res.status(400).json({message:"password are not same"});
                  }

              const users = new User ({username,email,password,retypepassword});
              
              const token = await users.genToken();
              console.log(token);

              const signup = await users.save();
              console.log(signup)
     
        if(signup){
          
         res.status(200).send({user:signup,token})
          }
         else{
          res.send("error!");
          }
       }catch(err){
         console.log(err);
       }
} 

exports.Login= async (req,res)=>{
try{
    const {email,password} = req.body;

    if(!email || !password)
    {
        res.send("enter the details");
    }
          const login = await User.findOne({email:email});
          console.log(login);
  
             if(this.login){
                 console.log("why")
              const comparepass = await bcrypt.compare(password, login.password);

                 if(comparepass){
                  res.status(200).json({message:"user login successfull"}); 
                    }
                else{
                  res.send("invaild password entered");
                 }
                 }  
             else{
          res.send("invaild details");
            }  
} catch(err){
    console.log(err);
}
}