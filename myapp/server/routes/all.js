var express = require('express');
var router = express.Router();

/* GET users listing. */
router.all('*', function(req, res, next) {
  res.send('Generic Path');
});

module.exports = router;
