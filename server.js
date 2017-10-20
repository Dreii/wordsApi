//load in required libraries and initiate them
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongojs = require('mongojs');
var db = mongojs('dictionaryApi',['wordList']);

//set bodyParsers limit much higher to facilitate adding lots of words at once
app.use(bodyParser.json({limit: '50mb'}));

//view engine for temporary add page(will remove later)
app.set('view engine', 'ejs'); // set up ejs for templating

//initiate all routes
require('./routes.js')(app, db);

//start app
app.listen(3000);
console.log('Server is running on port 3000...');
