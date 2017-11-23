/**
 * 已有api
 * *******
 * normal query全部查詢
 * general query分類查詢，包含單曲，專輯，歌手，歌單，用戶，電臺
 * artist根據artist_id獲取藝人信息
 * get song url根據song_id獲取歌曲真實url
 * query album id根據album_id獲取album信息
 * artist根據artist_id獲取歌手全部專輯信息
 * play list id 根據歌單id查詢歌單信息
 * **/



var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var search = require('./routes/normal_query');
var song = require('./routes/get_song_url');
var album = require('./routes/query_album_id');
var artist = require('./routes/artist');
var general = require('./routes/general_query');
var playList = require('./routes/play_list_id');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/users', users);
app.use('/search', search);
app.use('/song', song);
app.use('/album', album);
app.use('/artist', artist);
app.use('/generalsearch', general);
app.use('/playlist', playList);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;
