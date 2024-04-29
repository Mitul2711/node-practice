const User = require("../models/user");

async function handleGetAllUser(req, res) {
    const mongoUser = await User.find({});
    return res.json(mongoUser);
}

async function handlePostuser(req, res) {

    const body = req.body;

    if (!body || !body.number || !body.name || !body.email ) {
        return res.status(400).json({
            msg: "All fields are required..."
        })
    }

    const result = await User.create({
        name: body.name,
        email: body.email,
        number: body.number
    })

    return res.status(201).json({
        msg: "Success"
    })

}


module.exports = {
    handleGetAllUser,
    handlePostuser
}