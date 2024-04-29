const express = require("express");

const router = express.Router();

const { handleGetAllUsers } = require('../controllers/user');
const { handleGetUserById } = require('../controllers/user');
const { handlePatchUserById } = require('../controllers/user');
const { handleDeleteUserById } = require('../controllers/user');
const { handlePostUser } = require('../controllers/user');


// Routes   


// router.get("/users", async (req, res) => {

//     const alldbUsers = await User.find({});

//     const html = `
//         <ul>
//             ${alldbUsers.map(user => `<li>${user.firstName} - ${user.email}</li>`).join("")}
//         </ul>
//     `
//     res.send(html);
// });

router.route("/")
.get(handleGetAllUsers)
.post(handlePostUser);

router.route("/:id")
    .get(handleGetUserById)
    .patch(handlePatchUserById)
    .delete(handleDeleteUserById)



module.exports = router;