const mongoose = require('mongoose');
const {Schema} = mongoose;

const BeerShelfSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    beers: [
        {
            beerID: {
                type: Schema.Types.ObjectId,
                ref: 'Beer',
            },
            beerName: {
               type: String
            },
            photo: {
                type: String,
                required: true
            },
            usersRate: {
                type: Number,
                min: 1,
                max: 5,
                required: true
            }
        }
    ]

});

module.exports = mongoose.model('BeerShelf', BeerShelfSchema);