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
    description: {
        type: String,
        required: true
    },
    abv: {
        type: String
    },
    rating: {
        type: String
    }
});

module.exports = mongoose.model('Beer', BeerSchema);