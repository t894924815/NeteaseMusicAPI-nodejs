var express = require('express');
var router = express.Router();
var general = require('../netease_api/general_search');

/* GET users listing. */
router.post('/single', function (req, res, next) {
    // res.send('respond with a resource');
    general(req.body.key, 1, res);
});
router.post('/album', function (req, res, next) {
    // res.send('respond with a resource');
    general(req.body.key, 10, res);
});
router.post('/artist', function (req, res, next) {
    // res.send('respond with a resource');
    general(req.body.key, 100, res);
});
router.post('/user', function (req, res, next) {
    // res.send('respond with a resource');
    general(req.body.key, 1000, res);
});
router.post('/radio', function (req, res, next) {
    // res.send('respond with a resource');
    general(req.body.key, 1002, res);
});
router.post('/recommend', function (req, res, next) {
    // res.send('respond with a resource');
    general(req.body.key, null, res);
});
module.exports = router;
