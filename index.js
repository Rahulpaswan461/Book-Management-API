require("dotenv").config()

const express = require("express")
const {mongoConnect} = require("./connection")
const {checkForAuthenticationCookie} = require("./middleware/authentication")
const cookieParser = require('cookie-parser');
const userRouter = require("./routes/user")
const booksRouter = require("./routes/books")
const path = require("node:path")


mongoConnect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB is connected"))
.catch(()=>console.log("there is some error"))

const app = express()
const PORT = process.env.PORT ||  1240;

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(cookieParser())
app.use(checkForAuthenticationCookie("token"))
app.use(express.urlencoded({extended:false}))

app.use("/api",booksRouter)
app.use("/user",userRouter)

app.listen(PORT,()=>{
     console.log("Server is running")
})

