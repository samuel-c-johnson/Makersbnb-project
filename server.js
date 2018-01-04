// server.js
// load the things we need
var express = require('express');
var app = express();

//set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index.ejs');
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
