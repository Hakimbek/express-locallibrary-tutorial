var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res
      .set('Access-Control-Allow-Origin', 'http://localhost:3333')
      .set('Access-Control-Allow-Credentials', true)
      .send('cars');
});

module.exports = router;
