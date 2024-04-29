const mongoose = require("mongoose");
const { type } = require("os");

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
    },
    number: {
        type: Number
    }
});


const User = mongoose.model("user", UserSchema);

module.exports = User