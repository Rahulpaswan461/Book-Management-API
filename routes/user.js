const express = require("express")
const User = require("../models/user")
const { handleUserSignIn, handleUserSignUp } = require("../controllers/user")

const router = express.Router()


router.get("/signup",(req,res)=>{
    return res.render("signup")
})

router.get("/signin",(req,res)=>{
   return res.render("signin")
})

router.post("/signup",handleUserSignUp)

router.post("/signin",handleUserSignIn)


module.exports = router