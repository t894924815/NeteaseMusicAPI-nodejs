var qiniu = require('qiniu');
var config = new qiniu.conf.Config();
var formUploader = new qiniu.form_up.FormUploader(config);
var putExtra = new qiniu.form_up.PutExtra();
var uploadToken = '-----YOURSELF TOKEN-----';
var schemaUrl = '-----YOURSELF CDN-----';

// 文件上传
function upload(filename, path, callback) {
    formUploader.putFile(uploadToken, filename, path, putExtra, function (respErr,
                                                                          respBody, respInfo) {
        if (respErr) {
            console.log('err ' + respErr);
            // callback(true,undefined);
            callback(true, undefined);
            // throw respErr;
        } else {
            if (respInfo.statusCode === 200) {
                console.log('upload success: ' + schemaUrl + filename);
                callback(false, schemaUrl + filename);
            } else {
                console.log(respInfo.statusCode);
                console.log(respBody);
                // callback(true,undefined);
                callback(true, undefined);
            }
        }

    });
}

module.exports = upload;
