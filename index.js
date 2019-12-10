require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const apiPort = 3000;
const db = require("./DB");
const workoutRouter = require("./routes/workout-router");

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json())

db.on("error", console.error.bind(console, "MongoDB connection error:"))



app.get("/", (req,res)=>{
    res.send(JSON.stringify({Hello:"World"}))
    console.log("Hello")
});

app.use("/api", workoutRouter, (req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type")
});



app.listen(apiPort, ()=> console.log(`Server running on port ${apiPort}`));