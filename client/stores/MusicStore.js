var Reflux = require('reflux');
var request = require('superagent');
var MusicActions = require('../actions/MusicActions')

var _songs = [];

var MusicStore = Reflux.createStore({
    init: function() {
        this.listento(MusicActions.initialMusic, this.onInit)
        this.listento(MusicActions.playSong, this.onPlay)
        this.listento(MusicActions.addSong, this.onAdd)
        this.listento(MusicActions.removeSong, this.onRemove)
    },

    onInit: function() {},
    onPlay: function() {},
    onAdd: function() {},
    onRemove: function() {},
})
