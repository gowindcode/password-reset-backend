const express = require("express");
const router = express.Router();
const SignupModel = require("../modules/signupModel");
const LoginModel = require("../modules/loginModel");

//user signup

router.post("/signup", async(req, res) => {
    try {
        const existingUser = await SignupModel.findOne(
            {email: req.body.email} && {mobile: req.body.mobile}
        );

        if(existingUser) {
            res.status(400).send({message: "Email/Mobile details used."});
        } else {
            const newUser = new SignupModel({ ...req.body, verified: true});
            await newUser.save();
            console.log("signup successful.");
            res.status(200).send({ message: "Signup successful", newUser});
        }

    } catch (error) {
            console.log("Signup failed", error);
            res.send({ message: "signup failed, please enter valid details."});
            res.status(500).json({ message: "server error", error});
    }
});

//user-login

router.post("/login", async (req, res) => {
    try {
      console.log("user-login:", req.body);
  
      const { email, password } = req.body;
  
      // Find the user based on the provided email
      const loginRequest = await SignupModel.findOne({ email });
  
      // If user doesn't exist or password is incorrect, return an error
      if (!loginRequest || loginRequest.password !== password) {
        console.log("Invalid email or password");
        return res.status(401).json({ message: "Invalid email or password" });
      } else {
        const user = new LoginModel({ ...req.body, verified: true });
        await user.save();
        res.status(200).json({ message: "Login successful", user });
        // console.log("Login user details.", user);
      }
  
      // If user exists and password is correct, return a success message "Login successful"
    } catch (error) {
      console.error("User login failed", error);
      res.status(500).json({ message: "Server error" });
    }
  });

module.exports = router;