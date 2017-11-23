var http = require('http');
var download = require('./download');
var qiniu = require('./Qiniu');
var fix = require('./fix');
var msg = require('../netease_api/song_url');
var song = process.argv[2];

function deal(song) {
    if (undefined !== song) {
        song = JSON.parse(song);
        msg(song.id, undefined, function (res) {
            console.log(res);
            song.file = JSON.parse(res).data[0].url;
            dowloadFile(song);
        });

    }
}

function dowloadFile(song) {
    download(song.file, song.title, function (path) {
        qiniu(song.title + fix(song.file), path, function (err, url) {
            if (!err) {
                song.file = url;
                post(JSON.stringify(song));
            }
        })
    })
}

function post(postData) {
    if (undefined === postData) {
        return;
    }
    console.log('post to server' + postData);
    // return;
    var options = {
        hostname: '192.168.0.114',
        port: 80,
        path: '/v2/media',
        method: 'POST',
        headers: {
            //'Content-Type':'application/x-www-form-urlencoded',
            'Content-Type': 'application/json'
            // 'Content-Length': postData.length
        }
    };
    var req = http.request(options, function (res) {
        console.log('Status:', res.statusCode);
        console.log('headers:', JSON.stringify(res.headers));
        res.setEncoding('utf-8');
        res.on('data', function (chun) {
            console.log('body分隔线---------------------------------\r\n');
            console.info(chun);
        });
        res.on('end', function () {
            console.log('No more data in response.********');
        });
    });
    req.on('error', function (err) {
        console.error(err);
    });
    req.write(postData);
    req.end();
}

deal(song);