var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
		var name = (req.body.fname + " " + req.body.lname);
		res.render('index', { title: 'Express', username: name });
});

module.exports = router;
