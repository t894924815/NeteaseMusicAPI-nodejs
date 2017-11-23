var express = require('express');
var router = express.Router();
var song = require('../netease_api/song_url');
var song_msg = require('../netease_api/song_msg');

/* GET users listing. */
router.post('/', function (req, res, next) {
    // res.send('respond with a resource');
    song(req.body.id, res);
});

router.post('/msg', function (req, res, next) {
    // res.send('respond with a resource');
    song_msg(req.body.id, res, undefined);
});
module.exports = router;
