function fix(url) {
    var index = url.lastIndexOf('/');
    var _index = url.lastIndexOf('.');
    if (-1 !== _index && -1 !== index && _index > index) {
        return url.substring(_index);
    } else {
        return '';
    }
}

module.exports = fix;