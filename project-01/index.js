const express = require("express");
const app = express();

const userRouter = require("./routes/user");

const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middleware");


// connection

connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(() => {
    console.log("MongoDb Connected!")
});

// middleware
app.use(express.json());

app.use(express.urlencoded({
    extended: false
}));

app.use(logReqRes("log.txt"));

// routes

app.use("/api/users", userRouter);


app.listen(3000, () => {
    console.log("Server Started...")
});



