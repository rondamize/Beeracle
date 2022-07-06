const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const path = require('path');

require('dotenv/config')

global.appRoot = path.resolve(__dirname);
app.use(bodyParser.json());
app.use(express.static('static'))

//CORS
const corsOptions = {
    origin:'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))

// SESSIONS
const oneDay = 1000 * 60 * 60 * 24;
//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));
// cookie parser middleware
app.use(cookieParser());

//Import routes
const homeRoute = require('./routes/home');
app.use('/home', homeRoute);

const beerRoute = require('./routes/beer');
app.use('/beer', beerRoute);

const topRoute = require('./routes/top');
app.use('/top', topRoute);

const authRoute = require('./routes/auth');
app.use('/auth', authRoute);

// const registrationRoute = require('./routes/registration');
// app.use('/registration', registrationRoute);

const profileRoute = require('./routes/profile');
app.use('/profile', profileRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send("We are on /home");
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    () => {
        console.log("Connected to DB!");
    });

app.listen(3001);