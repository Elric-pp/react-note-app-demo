var Reflux = require('reflux');
var request = require('superagent');
var MusicActions = require('../actions/MusicActions')

var _songs = [];

var MusicStore = Reflux.createStore({
    init: function() {
        this.listenTo(MusicActions.initialMusic, this.onInit);
        this.listenTo(MusicActions.search, this.onSearch);
        this.listenTo(MusicActions.addSong, this.onAdd);
        this.listenTo(MusicActions.removeSong, this.onRemove);
    },

    onInit: function() {
        var self = this;
        request
            .get('/music')
            .end(function(err, res) {
                if (err) {
                    console.log(err)
                };
                _songs = res.body;
                console.log(_songs);
                self.trigger({to: 'musicList' , data: _songs});
            })
    },

    onAdd: function(data) {
        var self = this;
        request
            .post('/music/addone')
            .send(data)
            .end(function(err, res) {
                if (err) {
                    console.log(err)
                };
                _songs = res.body;
                console.log(_songs);
                self.trigger({to: 'musicList' , data: _songs});
            })
    },

    onRemove: function(id) {
        var self = this;
        request
            .post('/music/remove')
            .send({_id: id})
            .end(function(err, res) {
                if (err) {
                    console.log(err)
                };
                _songs = res.body;
                console.log(_songs);
                self.trigger({to: 'musicList' , data: _songs});
            })
    },

    onSearch: function(data) {
        var self = this;
        request
            .post('/music/search')
            .send({s: data})
            .end(function(err, res) {
                if (err) {
                    console.log(err)
                };
                _songs = res.body;
                console.log(_songs);
                self.trigger({to: 'resultList' , data: _songs});
            })
    }
})

module.exports =MusicStore;