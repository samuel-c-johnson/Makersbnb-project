// server.js
// load the things we need
var express = require('express');
var session = require('express-session');
var app = express();


//set the view engine to ejs
app.set('view engine', 'ejs');


// var sess = {
app.use(session({
  secret: 'property',
  saveUninitialized: false,
  resave: false
}));

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

// app.post('/lease/new', function(req, res) {
//   console.log(req.session)
//   // req.session.userName = req.query.name;
//   // res.send(req.session)
//   res.redirect('pages/listedProperty');
// });

app.get('/lease/pages/listedProperty', function(req, res) {
  // res.send(req.session)
  res.render('pages/listedProperty');
});

app.listen(8080);
console.log('8080 is the magic port')













// <!DOCTYPE html>

// <head>
//
// </head>
//
// <body>
//   <title> Welcome to Bedbugs </title>
//
//   <a href="/lease"><button type='btn btn-lg btn-info' >Rent</button></a>
//   <a href="/list"><button type='btn btn-lg btn-success' >List</button></a>
//
// </body>
