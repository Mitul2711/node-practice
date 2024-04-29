const express = require("express");

const router = express.Router();

const { handleGetAllUser } = require("../controller/route");
const { handlePostuser } = require("../controller/route");


router.route("/")
.get(handleGetAllUser)
.post(handlePostuser);

module.exports = router;