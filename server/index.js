const express = require('express');

const bodyParser = require('body-parser');
const database = require('./database');
const path = require("path");
const axios = require('axios');

const User = require('./models').User;
const Consumer = require('./models').Consumer;
const Vendor = require('./models').Vendor;
const Barcodes = require('./models').Barcodes;

var app = express();

app.use(express.static('static'));
app.use(require('./auth'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/testQuery', function(req, res) {
	console.log("RUNNING");
     res.send('This is a test! WEEEEE :D');
});

app.listen(3000, function() {
     console.log('Server is now running at port 3000');
});
