let router = require('express').Router();

router.get('/', function(req, res, next) {
  res.render('pages/rent');
});

module.exports = router;