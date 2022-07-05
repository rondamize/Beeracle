const express = require('express');
const router = express.Router();
const Beer = require('../models/Beer');
// const beerImagesPath = appRoot + '/static/images/beer'
//GET ALL BEER
router.get('/', async (req, res) => {
    try {
        const allBeer = await Beer.find().sort({date:-1});
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
        description: req.body.description,
        brewery: req.body.brewery,
        abv: req.body.abv ,
        rating: req.body.rating,
        date: Date.now(),
    });
    try {
        const savedBeer = await beer.save();
        res.json(savedBeer);
    }catch(err) {
        console.log(res.json({message: err}));
    }

});

//GET ALL BEER THAT MATCHES SEARCH STRING
router.get('/:searchString', async (req, res) => {
    try {
        // const foundBeer = await Beer.find({name: { $regex: req.params.searchString, $options: 'i' }}).sort({rating:-1});
        const foundBeer = await Beer.find({$or: [
            {name: { $regex: req.params.searchString, $options: 'i' }},
            {brewery: { $regex: req.params.searchString, $options: 'i' }},
        ]}).sort({rating:-1});
        res.json(foundBeer);
    }catch(err) {
        res.json({message: err});
    }
});

module.exports = router;