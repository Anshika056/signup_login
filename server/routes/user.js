const express = require("express");
const router = express.Router();
require("../database/connect");
const User = require("../models/userSchema");
const {signup,Login} = require("../controllers/user")
const {usermiddleware }= require("../middleware/auth")

router.post("/signup",signup);
router.post("/login",usermiddleware,Login);

module.exports = router;