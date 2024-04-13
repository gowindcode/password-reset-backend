const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routers/userRoute");



const app = express();
const PORT = process.env.PORT || PORT;

app.use(express.json());
app.use(cors()); //cros orgin

//routes
// app.use("/", (req, res, next) => {
//     next();
// });
app.use("/", userRoute); //signup, login

app.get("/", async(req, res) => {
    try {
        res.status(200).send("Welcome to password rest portal.");
    } catch (error) {
        res.status(500).send({ message: "Server connection failed or network interuptted.", error});
    }
});

//mongoose server connect
mongoose
.connect(process.env.MONGO_URL)
.then(() => {
    console.log("mongoose database server connected successfully ✔");
    app.listen(PORT, () => {
        console.log(`Hai I am server, now listening PORT:${PORT}. Happy coding 🤖`);
    });
})
.catch((error) =>{
    console.log("server error.", error);
    res.status(500).send({ message: "server connection disconnected ✖."})
});