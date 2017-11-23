var res = require('../netease_api/list_recommend');
var list = require('../netease_api/playlist');
var Song = require('../model/Song');
const child_process = require('child_process');

function getRecommend() {
    res(undefined, function (res) {
        getList(JSON.parse(res).playlists[0].id);
    });
}

function getList(list_id) {
    list(list_id, undefined, function (res) {
        console.log(res);
        iterator(JSON.parse(res).playlist.tracks);
    });
}

function iterator(array) {
    array.forEach(function (t, number) {
        var song = new Song(t.id, t.ar[0].name, null, 0, t.al.picUrl, t.name);
        var workerProcess = child_process.spawn('node', ['../upload/mission.js', JSON.stringify(song)]);

        // download(url,name,code);
        workerProcess.stdout.on('data', function (data) {
            console.log('stdout: ' + data);
        });
        workerProcess.stderr.on('data', function (data) {
            console.log('stderr: ' + data);
        });
        workerProcess.on('close', function (code) {
            console.log('子进程已退出，退出码 ' + code);
        });
    });
}

getRecommend();