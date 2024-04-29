const express = require("express")
const User = require("../models/user")

const router = express.Router()
router.get("/signup",(req,res)=>{
    return res.render("signup")
})

router.get("/signin",(req,res)=>{
   return res.render("signin")
})

router.post("/signup",async (req,res)=>{
    if(!req.body) throw new Error("ther is something wrong")

     const {fullName,email,password} = req.body;
     await User.create({
        fullName,
        email,
        password
     })
    return res.status(201).json({msg:"User signup successfully"})
})

router.post("/signin",async (req,res)=>{
   const {email,password } = req.body;
   try{
       const token = await User.matchPasswordAndGenerateToken(email,password);
        res.cookie("token", token, { httpOnly: true, secure: true })
        return res.json({ msg: "Signin Successfully" });
   }
   catch(error){
      return res.status(404).json({msg:"Email or password is not match"})
   }
   
})


module.exports = router