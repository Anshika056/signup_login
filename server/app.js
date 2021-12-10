const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
dotenv.config({path:"./config.env"});
const PORT=process.env.PORT                                     //the port in env file

require("./database/connect");                                  // linking the database to app 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT,()=>{
    console.log(`server is started at ${PORT}`);     //server running an connected
})