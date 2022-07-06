const express = require('express');
const router = express.Router();
const BeerShelf = require('../models/BeerShelf');
const Beer = require("../models/Beer");

let session;

//GET USERS BEER SHELF
router.get('/shelf', async (req, res) => {
    session=req.session;
    console.log(req);
    console.log("session user ID: " + session.userid);

    try {
        const thisUserBeerShelf = await BeerShelf.find({user: session.userid}, {beers: 1, _id: -1}).sort({usersRate:-1});
        res.json(thisUserBeerShelf);
    }catch(err) {
        res.json({message: err});
    }
});

//SUBMIT A BEER ON A SHELF
router.post('/shelf', async (req, res) => {
    session=req.session;
    let beersToBeSaved = [];

    for (let i = 0; i < req.body.beers.length; i++) {
        let beerData = await Beer.findById(req.body.beers[i].beer, {name: 1, photo: 1});
        beersToBeSaved.push({
            beerID: req.body.beers[i].beer,
            beerName: beerData.name,
            photo: beerData.photo,
            usersRate: req.body.beers[i].usersRate
        })
    }

    const beerShelf = new BeerShelf({
        user: session.userid,
        beers: beersToBeSaved
    });
    try {
        const savedBeerShelf = await beerShelf.save();
        res.json(savedBeerShelf);
    }catch(err) {
        console.log(res.json({message: err}));
    }

});

module.exports = router;