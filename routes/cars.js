var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('cars');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3333');
  res.setHeader('Access-Control-Allow-Credentials', true);
});

module.exports = router;
