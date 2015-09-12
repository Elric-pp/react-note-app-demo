'use strict';

var views = require('co-views');
var parse = require('co-body');
var monk = require('monk');
var wrap = require('co-monk');
var db = monk('localhost/musiclist');
var co = require('co');
var request = require('superagent');
var Q = require('q');


var musics = wrap(db.get('music'));

co(function * () {
    var musics = yield musics.find({});
})

module.exports.all = function* all(next) {
    if ('GET' != this.method) {
        return yield next;
    };

    this.body = yield musics.find({});
}







//添加一首歌曲
module.exports.addOne = function * addOne(data, next) {
    if ('POST' != this.method) {
        return yield next;
    };
    var music = yield parse(this, {
        limit: '1kb'
    });

    var inserted = yield todos.insert(music);
    if (!inserted) {
        this.throw(405, "can not add")
    };
    this.body = yield musics.find({});
}

module.exports.remove = function * remove(data, next) {
    if ('POST' != this.method) {
        return yield next;
    };

    var data = yield parse(this, {
        'limit': '1kb'
    })

    var music = yield musics.remove({_id: data.id}, function(err) {
        console.log(err)
    });

    this.body = yield music.find({})

}



module.exports.search = function* searchl(data, next) {
    if ('POST' != this.method) {
        return yield next;
    };

    var data = yield parse(this, {
        'limit': '1kb'
    })
    console.log(data);
    var self = this;
    console.log('hah');

    var lists = yield requestAll(data.s)
      
    this.body = lists;
}

function requestAll(string) {
    var url = "http://apis.baidu.com/geekery/music/query";
    var deferred = Q.defer();
    var list = [];
    request
        .get(url)
        .query({ s: string, limit: '5'})
        .set('apikey', '085d50117c493ec8a1b3d0926f8f493f')
        .end(function(err, res) {
            if (err) {
                console.log(err)
            };
            var json = JSON.parse(res.text)
            console.log(this)
            list = json.data.data.list;
            deferred.resolve(list)
        })
    return deferred.promise;
}