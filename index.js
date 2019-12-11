require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const apiPort = process.env.PORT || 4000;
const db = require("./DB");
const workoutRouter = require("./routes/workout-router");

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json())

if(process.env.NODE_ENV=== "production"){
    app.use(express.static("client/build"))
}
app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})

db.on("error", console.error.bind(console, "MongoDB connection error:"))





app.use("/api", workoutRouter, (req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type")
});

app.listen(apiPort, ()=> console.log(`Server running on port ${apiPort}`));