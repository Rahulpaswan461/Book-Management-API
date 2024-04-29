const {validateToken} = require("../service/authentication")

function checkForAuthenticationCookie(cookieName){
      return (req,res,next)=>{
            const tokenValue = req.cookies[cookieName]
             
            if(!tokenValue)return next()

            try{
                   const payload = validateToken(tokenValue)
                   req.user = payload;
            }
            catch(error){

            }
            return next()
      }
}

module.exports={
      checkForAuthenticationCookie
}