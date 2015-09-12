var Reflux = require('reflux');

var MusicActions = Reflux.createActions([
    "initialMusic",
    "search",
    "addSong",
    "removeSong"
]);

module.exports = MusicActions;