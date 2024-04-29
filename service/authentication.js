const JWT = require("jsonwebtoken")
const secret = "rahul@#$123"

function createTokenForUser(user){
     const payload={
          _id:user._id,
          email:user.email,
     }
     const token = JWT.sign(payload,secret)
     return token;
}
function validateToken(token) {
     try {
         const payload = JWT.verify(token, secret);
         return payload;
     } catch (error) {
         // Handle the error appropriately
         console.error("Error validating token:", error.message);
         throw new Error("Invalid token");
     }
 }
 

module.exports={
      createTokenForUser,
      validateToken
}