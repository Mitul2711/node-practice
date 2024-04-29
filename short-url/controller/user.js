const USER = require("../model/user")
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth");

async function handleUserSignUp(req, res) {
    const { name, email, password } = req.body;

    await USER.create({
        name,
        email,
        password
    }) 

    return res.redirect("/");
}


async function handleUserLogin(req, res) {
    const { email, password } = req.body;

    const user = await USER.findOne({ email, password });

    if(!user) {
        return res.render("login", {
            error: "invalid username or password"
        })
    }

    const token = setUser(user);
    // res.cookie("uid", token);

    return res.json({ token });
}

module.exports = {
    handleUserSignUp,
    handleUserLogin
}