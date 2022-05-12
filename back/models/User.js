const mongoose = require('mongoose');

function validateEmail(email) {
    // let regex = /^([A-Z0-9_-]+\.)*[A-Z0-9_-]+@[A-Z0-9_-]+(\.[A-Z0-9_-]+)*\.[A-Z]{2,6}$/
    // return regex.test(email)
    // console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: [validateEmail, "Please fill a valid email address"],
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

UserSchema.path('email').validate(async (email) => {
    let emailCount = await mongoose.models.User.countDocuments({email});
    return !emailCount;
}, 'A user with this email already exists')

module.exports = mongoose.model('User', UserSchema);