'use strict';

var views = require('co-views');
var parse = require('co-body');
var co = require('co');


var render = views(__dirname + '/../views', {
    map: {
        html: 'swig'
    }
});

module.exports.home = function *home(next) {
    if ('GET' != this.method) {
        return yield next;
    };
    this.body = yield render('index');
}


