'use strict';

var views = require('co-views');
var parse = require('co-body');
var monk = require('monk');
var wrap = require('co-monk');
var db = monk('localhost/todolist');
var co = require('co');

var todos = wrap(db.get('todos'));

co(function*() {
    var todos = yield todos.find({});
})


module.exports.all = function * all(next) {
    if ('GET' != this.method) {
        return yield next;
    };
    this.body = yield todos.find({});
}


module.exports.add = function * add(data, next) {
    if ("POST" != this.method) {
        return yield next;
    };
    var todo = yield parse(this, {
        limit: '1kb'
    });

    var inserted = yield todos.insert(todo);
    if (!inserted) {
        this.throw(405, "can not add")
    };
    this.body = yield todos.find({});
}

module.exports.remove = function * remove(data, next) {
    console.log('hello')
    if ("POST" != this.method) {
        return yield next;
    };

    var data = yield parse(this, {
        limit: '1kb'
    })

    console.log(data)
    var todo = yield todos.find({_id: data._id}, {
        'limit': 1
    })
    console.log(todo);


    if (todo.length === 0) {
        this.throw(404, 'todo with id =' + data._id + 'was not found');
    };

    var removed = todos.remove(todo[0]);

    if (!removed) {
        this.throw(405, "Unable to delete")
    } else {
        this.body = yield todos.find({});
    }

}

module.exports.update = function * update(data, next) {
   if ("POST" != this.method) {
        return yield next;
    };

    var data = yield parse(this, {
        limit: '1kb'
    })

    var todo = yield todos.find({_id: data._id}, {
        'limit': 1
    })

    if (todo.length === 0) {
        this.throw(404, 'todo with id =' + id + 'was not found');
    };


    var update = todos.findAndModify({_id: todo[0]._id}, {
        $set: data.todo
    }, function(err) {
        console.log(err)
    })

    if (!update) {
        this.throw(405, "Unable to update");
    } else {
        this.body = yield todos.find({});
    }

}


