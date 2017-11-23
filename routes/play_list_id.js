var express = require('express');
var router = express.Router();
var play_list = require('../netease_api/playlist');

/* GET users listing. */
router.post('/', function (req, res, next) {
    // res.send('respond with a resource');
    play_list(req.body.id, res, undefined);
});
module.exports = router;
