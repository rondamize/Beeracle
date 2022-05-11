const express = require('express');
const router = express.Router();
const Beer = require('../models/Beer');

//GET ALL BEER
router.get('/', async (req, res) => {
    try {
        const allBeer = await Beer.find().sort({rating:-1})
        res.json(allBeer);
    }catch(err) {
        res.json({message: err});
    }
});

// src = http://localhost:3001/images/beer/filename.svg

module.exports = router;