const express = require('express');
const router = express.Router();
const User = require('../models/User');

// a variable to save a session
let session;
//CHECK IF A USER IS LOGGED IN
router.get('/me',async (req,res) => {
    session=req.session;
    if(session.userid){
        let user = await User.findById(session.userid,  {userName: 1, email: 1, _id: 1});
        console.log(`${user.userName} successfully authorised`)
        res.json({"data": user, resultCode: 0});
        // res.send(`Welcome ${session.username}`);
        // res.redirect('/');
    } else {
        res.json({"error": "You are not logged in", resultCode: 1});
    }
});

//LOGIN
router.post('/login',async (req,res) => {
    let user = await User.findOne({email: req.body.email, password: req.body.password}, {userName: 1, email: 1, _id: 1});
    console.log(user);

    if (!user || !Object.keys(user).length) {
        res.json({"error": "Invalid username or password", resultCode: 1});
        // res.send('Invalid username or password');
    } else {
        session=req.session;
        session.userid=user._id;
        session.username = user.userName;
        // console.log(req.session)
        // console.log(req)
        // res.redirect('/home');
        res.json({"data": user, resultCode: 0});
        // res.send(`Hey ${user.userName}, welcome!`);
        // res.redirect('/');
    }
})

//LOGOUT
router.get('/logout',(req,res) => {
    req.session.destroy();
    res.json({resultCode: 0});
    res.redirect('/');
});

//REGISTRATION
//SUBMIT USER
router.post('/registration', async (req, res) => {
    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin
    });

    try {
        const savedUser = await user.save();
        res.json(savedUser);
    }catch(err) {
        console.log(res.json({message: err}));
    }

});

//GET ALL USERS
router.get('/',async (req,res) => {
    try {
        const allUsers = await User.find();
        res.json(allUsers);
    }catch(err) {
        res.json({message: err});
    }
});

module.exports = router;