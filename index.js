require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const apiPort = 3000;
const db = require("./DB");
const workoutRouter = require("./routes/workout-router");

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json())

db.on("error", console.error.bind(console, "MongoDB connection error:"))



app.get("/", (req,res)=>{
    res.send("Hello World")
});

app.use("/api", workoutRouter, (req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type")
});

app.get("/", (req,res, next)=>{
    
})

app.listen(apiPort, ()=> console.log(`Server running on port ${apiPort}`));