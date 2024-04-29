
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.send("Home Page");
})

app.get("/about", (req, res) => {
    return res.send("About Page");
})

app.get("/contact", (req, res) => {
    return res.send("Contact Page");
})


app.listen(3000, () => {
    console.log("Server started...");
})