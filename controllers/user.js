const User = require("../models/user")

async function handleUserSignUp(req,res){
    const { fullName, email, password } = req.body;

    try {
        // Check if required fields are present
        if (!fullName || !email || !password) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Create the user
        await User.create({
            fullName,
            email,
            password
        });

        return res.status(201).json({ msg: "User signed up successfully" });
    } catch (error) {
        console.error("Error while signing up user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

async function handleUserSignIn(req,res){
    const {email,password } = req.body;

   if(!email || !password)return res.status(400).json({msg:"Fileds are requierd"})
   try{
       const token = await User.matchPasswordAndGenerateToken(email,password);
        res.cookie("token", token, { httpOnly: true, secure: true })
        return res.json({ msg: "Signin Successfully" });
   }
   catch(error){
      return res.status(404).json({msg:"Email or password is not match"})
   }
   
}

module.exports={
    handleUserSignUp,
    handleUserSignIn
}