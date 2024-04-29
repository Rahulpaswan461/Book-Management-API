const mongoose  = require("mongoose")

const bookSchema = new mongoose.Schema({
      title:{
         type:String,
         required:true,
      },
      author:{
        type:String,
        required:true,
      },
      publicationYear:{
         type:Number,
         required:true,
      }
},{timestamps:true})

const Books = mongoose.model("books",bookSchema)

module.exports=Books