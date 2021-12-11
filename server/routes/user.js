const express = require("express");
const router = express.Router();
require("../database/connect");
const User = require("../models/userSchema");
const {signup} = require("../controllers/user")


router.post("/signup",signup);


module.exports = router;