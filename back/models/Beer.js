const mongoose = require('mongoose');

const BeerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brewery: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    abv: {
        type: Number
    },
    rating: {
        type: Number
    },
    date: {
        type: Date,
        // default: Date.now()
    },
});

module.exports = mongoose.model('Beer', BeerSchema);