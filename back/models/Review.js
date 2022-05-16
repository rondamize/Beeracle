const mongoose = require('mongoose');
const {Schema} = mongoose;

const ReviewSchema = mongoose.Schema({
    beer: {
        type: Schema.Types.ObjectId,
        ref: 'Beer',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: {
        type: String
    },
    text: {
        type: String,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
});

module.exports = mongoose.model('Review', ReviewSchema);