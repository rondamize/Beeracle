const express = require('express');
const router = express.Router();
const Beer = require('../models/Beer');
// const beerImagesPath = appRoot + '/static/images/beer'
//GET ALL BEER
router.get('/', async (req, res) => {
    try {
        const allBeer = await Beer.find();
        res.json(allBeer);
    }catch(err) {
        res.json({message: err});
    }
});

// src = http://localhost:3001/images/beer/filename.svg

//SUBMIT BEER
router.post('/', async (req, res) => {
    const beer = new Beer({
        name: req.body.name,
        photo: '/images/beer/' + req.body.photo, // req.body.photo - нзвание файла фотографии
        category: req.body.category,
        description: req.body.description ,
        abv: req.body.abv ,
        rating: req.body.rating
    });

    try {
        const savedBeer = await beer.save();
        res.json(savedBeer);
    }catch(err) {
        res.json({message: err});
    }

});

//GET A SPECIFIC POST
// router.get('/:postID', async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.postID);
//         res.json(post);
//     }catch(err) {
//         res.json({message: err});
//     }
// });

module.exports = router;