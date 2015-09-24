var express = require('express');
var router = express.Router();

/* GET showError listing. */
router.get('/', function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
});

module.exports = router;
