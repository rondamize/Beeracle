// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
//
// //SUBMIT USER
// router.post('/', async (req, res) => {
//     const user = new User({
//         userName: req.body.userName,
//         email: req.body.email,
//         password: req.body.password,
//         isAdmin: req.body.isAdmin
//     });
//
//     try {
//         const savedUser = await user.save();
//         res.json(savedUser);
//     }catch(err) {
//         console.log(res.json({message: err}));
//     }
//
// });
//
//
//
// module.exports = router;