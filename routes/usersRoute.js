const express = require('express');
const router = express.Router();
const User = require("../models/user");


router.post("/register", async (req, res) => {

    const newuser = new User({ name: req.body.name, email: req.body.email, password: req.body.password });

    try {
        const user = await newuser.save()
        res.send("User Registered Successfully!")
    } catch (error) {
        return res.status(400).json({ error })
    }

})



router.post("/login", async (req, res) => {

    const { email, password } = req.body



    try {
        const user = await User.findOne({ email: email, password: password })

        if (user) {
            //this temp variable is considered good practice beacause the data is sent but not the password which can be visible to other that's why for beginners this is best pratice
            const temp = {
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                _id:user._id
            }
            res.send(temp);
        }
        else {
            return res.status(400).json({ message: "Login Failed!" })
        }
    } catch (error) {
        return res.status(400).json({error})

    }

});


module.exports = router;

