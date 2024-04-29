const { connectMongo } = require("./connection/connect");
const { logReqRes } = require("./middleware/middle");
const express = require("express");

const app = express();

const userRouter = require("./routes/router");


// connection

connectMongo("mongodb://127.0.0.1:27017/myDatabase").then(() => {
    console.log("MongoDb Connected...");
})



// middleware

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use(logReqRes("log.txt"));



// routes

app.use("/user", userRouter);


app.listen(8000, () => {
    console.log("Server Started...");
})