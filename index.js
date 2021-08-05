require("dotenv").config();
const express = require("express");

const connectDB = require('./connection');

const app = express();

app.get("/", (req,res) => {
    return res.json({message:"Success"});
});

app.post("/user/:id",(req,res) => {
    return res.json(req.params);
});

app.listen(4000, () => 
connect()
    .then(() => console.log("Server is Running"))
    .catch((error) => console.log(error))
);