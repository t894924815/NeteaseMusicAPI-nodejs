var http = require('http');
var querystring = require('querystring');

var key = require('./tools');

//发送 http Post 请求

function post(postData, resP) {
    if (undefined === postData) {
        return;
    }
    postData = querystring.stringify(postData);
    var options = {
        hostname: 'music.163.com',
        port: 80,
        path: '/weapi/cloudsearch/get/web?csrf_token=',//search
        // path: '/weapi/song/enhance/player/url?csrf_token=',
        method: 'POST',
        headers: {
            'referer':'http://music.163.com',
            'Cookie':'os=uwp; osver=10.0.10586.318; appver=1.2.1;',
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'Content-Type': 'application/json; charset=UTF-8',
            'Content-Length': postData.length
        }
        // body: {
        //     "params": "qD+nYFMreKg5s1qMx1v3suzBr1OZQyUpF/hkE+g9jqSZZKloe6Odg+feyPlAW63zZ105OHmEDRSpTIxfC3aED3X6gEC024KdWW7Wl0vlXaU=",
        //     "encSecKey": "2206d1cd5353dbb7c5910b0203416286c26a9b2de948b73047a82b60eebcc12cdb12662e3f649b29b1f4acaf6e3fb784040dd94a84725a17f8748540958c0bc0f29e51906bb348b1e4a88d1b2634b07a4ee8bcf7b16729f84ea5f69adf9bc7f195a0b6598082ff42e99d2d790a7cda08d251e88591c64a8741ab49432b427804"
        // }
    };
    var req = http.request(options, function (res) {
        console.log('Status:', res.statusCode);
        console.log('headers:', JSON.stringify(res.headers));
        res.setEncoding('utf-8');
        var result = "";
        res.on('data', function (chun) {
            console.info(chun);
            result += chun;
        });
        res.on('end', function () {
            console.log('No more data in response.********');
            resP.send(result);
        });
    });
    req.on('error', function (err) {
        console.error(err);
        resP.send({
            success: false
        });
    });
    req.write(postData);
    req.end();
}

/**
 *
 *
 type: 搜索类型
 1 单曲
 10 专辑
 100 歌手
 1000 歌单
 1002 用户
 1009 电台
 NULL 推荐（实测失效）
 * **/

function general(keys, type, res) {
    if (undefined !== keys) {
        var coin = key('{"s":"' +
            keys +
            '","limit":"8","type":"' +
            type +
            '","csrf_token":""}');//search api
// var coin = key('{"ids":"[418603077]","br":128000,"csrf_token":""}');
        var s = {
            "params": coin.encText,
            "encSecKey": coin.encSecKey
        };
// var s = "s";
        post(s, res);
    } else {
        res.send({
            success: false
        });
    }

}

module.exports = general;