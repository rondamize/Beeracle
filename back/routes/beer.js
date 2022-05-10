const express = require('express');
const router = express.Router();
const Beer = require('../models/Beer');


//GET A SPECIFIC BEER
router.get('/:beerID', async (req, res) => {
    try {
        const beer = await Beer.findById(req.params.beerID);
        res.json(beer);
        console.log(beer);
    }catch(err) {
        res.json({message: err});
    }
});

module.exports = router;