const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate=require("../middleware/authenticate")
const cookieParser = require('cookie-parser');
require('../db/conn')
const User = require('../model/userSchema');


router.get('/', (req, res) => {
    res.send(`Hi from server router js`)
})
router.use(cookieParser());
const { hash } = require('bcryptjs');


router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({
            error: "fill it properly"
        })
    }
    try {
        const exist = await User.findOne({ email: email })
        if (exist) {
            return res.status(422).json({ error: " Email Exist already" });
        }
        const user = new User({ name: name, email, phone, work, password, cpassword }) // If the key and value are same then we can write it as "name" only also and if not we can write both key and value like="name:name"both it will result same 

        const userRegister = await user.save();
        console.log(userRegister);

        res.status(201).json({ message: "user registered successfuly" })
    }
    catch (err) {
        console.log(err)
    }
})


router.post('/signin', async (req, res) => {
   
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Fill the data properly" });
        }

        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
          
            token = await userLogin.generateAuthToken();
            console.log(token);         


            // Session Management
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 86400000),//24hrs in millisec
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials" })
            }
            else {
                res.json({ message: "user signin successfully" })
            }
        }
        else {
            res.status(400).json({ error: "Invalidity" })
        }
    } catch (error) {
        console.error(error);
        
    }
});




//for getting data page.
router.get('/getdata', authenticate, (req, res) => {
    res.send(req.rootUser);
    
})

router.get('/logout', authenticate, (req, res) => {
    console.log("Hi from logout");
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send("User Logout");
})
module.exports = router;