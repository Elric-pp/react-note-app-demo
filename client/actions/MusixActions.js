var Reflux = require('reflux');

var MusicActions = Reflux.createActions([
    "initialMusic",
    "playSong",
    "addSong",
    "removeSong"
])

module.exports = MusicActions;