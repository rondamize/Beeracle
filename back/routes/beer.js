const express = require('express');
const router = express.Router();
const Beer = require('../models/Beer');
const Review = require('../models/Review');
const User = require('../models/User');


//GET A SPECIFIC BEER
router.get('/:beerID', async (req, res) => {
    try {
        const beer = await Beer.findById(req.params.beerID);
        const reviews = await Review.find({beer: req.params.beerID, text: {$exists:true, $gt:""}}).sort({date:-1});
        // console.log(reviews);
        res.json({beer, reviews: reviews});
        console.log(beer);
    }catch(err) {
        console.log(err);
        res.json({message: err});
    }
});

//GET ALL COMMENTS TO A SPECIFIC BEER
router.get('/:beerID/reviews', async (req, res) => {
    try {
        const reviews = await Review.find({beer: req.params.beerID, text: {$exists:true, $gt:""}}).sort({date:-1});
        res.json(reviews);
        console.log(reviews);
    }catch(err) {
        res.json({message: err});
    }
});

//SUBMIT A REVIEW
router.post('/:beerID/reviews', async (req, res) => {
    const userName = await User.findById(req.body.user, {userName: 1});
    console.log(userName)
    const review = new Review({
        beer: req.body.beer,
        user: req.body.user,
        userName: userName.userName,
        text: req.body.text,
        date: Date.now(),
        rating: req.body.rating
    });
    try {
        const savedReview = await review.save();
        console.log("HELLO there", Date.now())
        res.json(savedReview);
    }catch(err) {
        console.log(res.json({message: err}));
    }

});



module.exports = router;