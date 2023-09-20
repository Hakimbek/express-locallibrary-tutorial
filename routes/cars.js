var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res
      .set('Access-Control-Allow-Origin', 'https://main--beautiful-frangollo-2156f9.netlify.app')
      .set('Access-Control-Allow-Credentials', true)
      .send('cars');
});

module.exports = router;
