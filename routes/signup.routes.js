const router = require('express').Router()
const express = require('express');
const app=express()
const signupcontroller = require('../controller/signup.controller')
// const upload=require('../config/multer')
// const cookieParser = require("cookie-parser");
// const verifyToken=require('../config/verify')
// const Jwt = require('jsonwebtoken')
// const jwtKey = "chirpn@best";


router.post('/signup',signupcontroller.signup)



module.exports=router