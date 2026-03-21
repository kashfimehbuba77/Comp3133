var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// POST route
router.post('/', function(req, res, next) {
    console.log("POST Data:", req.body);
    res.send('POST received!');
});

module.exports = router;