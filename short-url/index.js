const express = require("express");
const path = require("path");
const urlRoute = require("./routes/url");
const { connectToMongoDb } = require("./connection");
const staticRoute = require("./routes/staticRoute");
const app = express();
const port = 4000
const userRoute = require("./routes/user");
const URL = require("./model/url")

const cookieParser = require("cookie-parser");

const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");


// connection

connectToMongoDb("mongodb://127.0.0.1:27017/short-url").then(() => {
    console.log("MongoDb Connected...");
})

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// middleware
app.use(express.json());

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// route

app.use("/url", restrictToLoggedinUserOnly, urlRoute);

app.use("/", checkAuth, staticRoute);

app.use("/user", userRoute);


app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
})