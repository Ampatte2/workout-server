const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_CLIENT, {useNewUrlParser: true, useUnifiedTopology: true}, function(error){
    if(error){
        console.log("error", error)
    }else{
        console.log("Database Connection")
    }
})


const db = mongoose.connection

db.once("open", function(){
    console.log("we are connected");
})
module.exports = db;