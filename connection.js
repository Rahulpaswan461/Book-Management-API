const mongoose = require("mongoose")

function mongoConnect(filePath){
      return mongoose.connect(filePath)
}

module.exports={
    mongoConnect,
}