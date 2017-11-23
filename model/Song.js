module.exports = Song;

function Song(id, author, file, genre, thumbnail, title) {
    this.id = id;
    this.author = author;
    this.file = file;
    this.genre = genre;
    this.thumbnail = thumbnail;
    this.title = title;
}

Song.prototype.getId = function () {
    return this.id;
};

Song.prototype.getAuthor = function () {
    return this.author;
};
Song.prototype.getFile = function () {
    return this.file;
};
Song.prototype.getGenre = function () {
    return this.genre;
};
Song.prototype.getThumbnail = function () {
    return this.thumbnail;
};
Song.prototype.getTitle = function () {
    return this.title;
};

Song.prototype.setFile = function (file) {
    this.file = file;
};