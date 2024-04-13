const mongoose = require("mongoose");

const passwordResetSchema = mongoose.Schema(
    //password verify and reset
    {
        email: {type: String, required: true},
        token: {type: String, required: true},
        newPassword: {type: String, required: true},
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

const PasswordResetModel = mongoose.model("reset-passwords", passwordResetSchema);
module.exports = PasswordResetModel;