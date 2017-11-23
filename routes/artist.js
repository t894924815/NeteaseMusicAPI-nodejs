var express = require('express');
var router = express.Router();
var artist = require('../netease_api/artist_msg');
var albums = require('../netease_api/album_artist');

/* GET users listing. */
router.post('/', function (req, res, next) {
    // res.send('respond with a resource');
    artist(req.body.id, res);
});
router.post('/albums', function (req, res, next) {
    // res.send('respond with a resource');
    albums(req.body.id, res);
});
module.exports = router;
