let router = require('express').Router();
let sqlite3 = require('sqlite3').verbose();
let session = require('express-session');
let bodyParser = require('body-parser');

let db = new sqlite3.Database('./db/bed_bugs.db', sqlite3.OPEN_READWRITE, function (err) {
  if (err) { return console.error(err.message) }
  console.log('Connected to the bed_bugs database.');
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function (req, res, next) {
  res.render('pages/lease');
});

router.post('/new', function (req, res, next) {
  params = req.body;
  res.redirect('pages/listedProperty');
});

router.get('/pages/listedProperty', function (req, res, next) {
  // console.log(params)

  // let check = 
  // let arr = [params.name, params.location, params.address, params.capacity, params.cost, params.email, params.phone]
  // console.log(Object.values(arr)) 
  // let sql = 'INSERT INTO properties ( NAME, LOCATION, ADDRESS, CAPACITY, COST, E_MAIL, PHONE_NUM ) VALUES' + arr;


  // db.run(`INSERT INTO properties ( NAME, LOCATION, ADDRESS, CAPACITY, COST, E_MAIL, PHONE_NUM )
  // VALUES ( )`,
  //   function (err) {
  //     if (err) { return console.error(err.message) }
  //     console.log(`A row has been inserted with the id of ${this.lastID}`);
  //   });
  // db.close();

  res.render('pages/listedProperty', { params });
});

module.exports = router;