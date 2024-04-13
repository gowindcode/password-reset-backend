const mongoose = require("mongoose");

const signupSchema = mongoose.Schema(
    //signup
    {
        name: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        mobile: {type: Number, required: true},
        address: {type: String, required: true},
        verified: {type: Boolean, required: true},
        role: {
            type: String,
            required: true,
            default: "user",
            enum: ["user", "admin"],
        },
    },
    { timestamps: true}
);

const SignupModel = mongoose.model("signup", signupSchema);
module.exports = SignupModel;