const mongoose = require("mongoose");

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
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    retypepassword:{
       type:String,
       required:true
    },
    tokens: [
        {
        token:{
            type:String,
            required: true
           }
        }
    ]
},{timestamps:true});


const User = new mongoose.model("USER",userSchema);

module.exports=User;