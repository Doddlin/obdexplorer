var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('code', { title: req.param.id, message: 'Hello there!' });
});


router.post('/addcode', function(req, res, next) {
    res.render('code', {status: "Code was uploaded"});
    let sql = 'INSERT INTO codes(code) VALUES' + placeholders;
});

module.exports = router;
