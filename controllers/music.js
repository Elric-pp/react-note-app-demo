'use strict';

var views = require('co-views');
var parse = require('co-body');
var monk = require('monk');
var wrap = require('co-monk');
var db = monk('localhost/musiclist');
var co = require('co');

var musics = wrap(db.get('music'));

co(function * () {
    var musics = yield musics.find({});
})

module.exports.all = function * all(next) {
    if ('GET' != this.method) {
        return yield next;
    };
    this.body = yield musics.find({});
}

//添加一首歌曲
module.exports.add = function * add(date, next) {
    if ('POST' != this.method) {
        return yield next;
    };
    var music = yield parse(this, {
        limit: '10kb'
    });

    var inserted = yield todos.insert(music);
    if (!inserted) {
        this.throw(405, "can not add")
    };
    this.body = yield musics.find({});
}

module.exports.remove = function * remove(id, next) {
    if ('POST' != this.method) {
        return yield next;
    };

    var music = yield musics.findOne({}, function(err) {
        console.log(err)
    });


}