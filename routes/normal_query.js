var express = require('express');
var router = express.Router();
var list_api = require('../netease_api/normal_search');

/* GET users listing. */
router.post('/', function (req, res, next) {
    // res.send('respond with a resource');
    list_api(req.body.key, res);
});

module.exports = router;
