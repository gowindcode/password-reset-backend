const mongoose = require("mongoose");

const loginSchema = mongoose.Schema(
    //login
    {
        email: {type: String, required: true},
        password: {type: String, required: true},
        verified: {type: Boolean, required: true},
    },
    { timestamps: true}
);

const LoginModel = mongoose.model("login", loginSchema);
module.exports = LoginModel;