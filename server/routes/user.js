const express = require("express");
const router = express.Router();
require("../database/connect");
const User = require("../models/userSchema");
const {signup,login} = require("../controllers/user")


router.post("/signup",signup);
router.get("/login",login);

module.exports = router;