var express = require('express');
var router = express.Router();

/* GET showError listing. */
router.get('/', function(req, res, next) {
  throw new Error('Error');
});

module.exports = router;
