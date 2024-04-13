const mongoose = require("mongoose");

const tokenGenerateSchema = mongoose.Schema(
    //password rest token generate
    {
        email: {type: String, required: true},
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

const tokenGenerateModel = mongoose.model("token", tokenGenerateSchema);
module.exports = tokenGenerateModel;