const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv/config')

global.appRoot = path.resolve(__dirname);
app.use(bodyParser.json());
app.use(express.static('static'))

const corsOptions = {
    origin:'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))

//Import routes
const homeRoute = require('./routes/home');
app.use('/home', homeRoute);

const beerRoute = require('./routes/beer');
app.use('/beer', beerRoute);

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