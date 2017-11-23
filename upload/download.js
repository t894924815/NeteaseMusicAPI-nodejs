var request = require('request');
var pathTool = require('path');
var fs = require('fs');
var fix = require('./fix');

function download(url, title, callBack) {
    var path = pathTool.join(__dirname, '../download/' + title + '.' + fix(url));

    console.log('download.js is downloading...');
    var stream = fs.createWriteStream(path);
    request(url).pipe(stream).on('close', function (a) {
        console.log(title + 'is download success,now uploading');
        callBack(path);
    });
}


module.exports = download;