const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator=require("validator")

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
        validate: (value) => {
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

userSchema.pre("save",async function(next){                   // to  bcrpty
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
        this.retypepassword = await bcrypt.hash(this.retypepassword,12);
    }
    next();
})

const User = new mongoose.model("USER",userSchema);

module.exports=User;