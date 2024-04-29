const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    const alldbUsers = await User.find({});

    res.setHeader("X-myName", "Mitul");

    return res.json(alldbUsers);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({
            error: "User not found..."
        })
    }
    return res.json(user);
}

async function handlePatchUserById(req, res) {
    // Edit user
    const body = req.body;
    await User.findByIdAndUpdate(req.params.id, {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender,
        jobTitle: body.jobTitle
    });
    return res.json({
        msg: "Success"
    });
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({
        msg: "Success"
    })
}

async function handlePostUser(req, res) {
     // add user
     const body = req.body;

     if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
         return res.status(400).json({
             msg: "All fields are required..."
         })
     }
 
     const result = await User.create({
         firstName: body.first_name,
         lastName: body.last_name,
         email: body.email,
         gender: body.gender,
         jobTitle: body.job_title
     });
 
     return res.status(201).json({
         msg: "Success"
     });
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handlePatchUserById,
    handleDeleteUserById,
    handlePostUser
}