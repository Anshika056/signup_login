const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator=require("validator")
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        min:4,
        max:15,
        lowercase:true
    },
    email:{
        type:String, 
        required: true,
        trim: true,
        unique: true,
        validate: (value) => {                             //validation the password
            if (!validator.isEmail(value)) {
              throw new Error("Invalid Email Address");
            }
          },
    },
    password:{
        type:String,
        required: true
    },
    retypepassword:{
       type:String,
       required:true
    },
},{timestamps:true});

userSchema.pre("save",async function(next){                   // to  bcrpty the password
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
        this.retypepassword = await bcrypt.hash(this.retypepassword,12);
    }
    next();
})

userSchema.methods.genToken = async () =>{                                //generation of the token  
     const token = await jwt.sign({_id:this._id},process.env.SECRET_KEY);    //token generation with id and secret key
     return token;          

}

const User = new mongoose.model("USER",userSchema);

module.exports=User;