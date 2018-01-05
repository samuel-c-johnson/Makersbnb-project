// server.js
// load the things we need
let express = require('express');
let session = require('express-session');
let bodyParser = require('body-parser');
let sqlite3 = require('sqlite3').verbose();


let index = require('./routes/index')
let lease = require('./routes/lease');
let rent = require('./routes/rent');

let app = express();


//set the view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/lease', lease);
app.use('/rent', rent);
app.use('/', index);


app.listen(8080);
console.log('8080 is the magic port')
