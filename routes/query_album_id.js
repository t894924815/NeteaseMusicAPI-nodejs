var express = require('express');
var router = express.Router();
var album = require('../netease_api/album_id');

/* GET users listing. */
router.post('/', function (req, res, next) {
    // res.send('respond with a resource');
    album(req.body.id, res);
});

module.exports = router;
