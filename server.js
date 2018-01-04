// server.js
// load the things we need
var express = require('express');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');


//set the view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
 res.render('pages/index');
});

app.get('/lease', function(req, res) {
 res.render('pages/lease');
});

app.get('/rent', function(req, res) {
 res.render('pages/rent');
});

app.post('/lease/new', function(req, res) {
  params = req.body
  res.redirect('pages/listedProperty');
});

app.get('/lease/pages/listedProperty', function(req, res) {
  console.log(params)
 res.render('pages/listedProperty', {params});
});

app.listen(8080);
console.log('8080 is the magic port')
