var Reflux = require('reflux');
var request = require('superagent')
var TodoActions = require('../actions/TodoActions');
// var Q = require('q');
// var defer = Q.defer();
var _todos = [];

var TodoStore = Reflux.createStore({
    init: function() {
        this.listenTo(TodoActions.createTodo, this.onCreate);
        this.listenTo(TodoActions.editTodo, this.onEdit);
        this.listenTo(TodoActions.finishTodo, this.onFinish);
        this.listenTo(TodoActions.initialTodo, this.onInit);
        this.listenTo(TodoActions.removeTodo, this.onRemove);
    },

    onInit: function(){
        var self = this;
          request
            .get('/todos')
            .end(function(err, res) {
                if (err) {
                    console.log(err)
                };
               _todos = res.body;
               self.trigger(_todos);
            })
    },

    onCreate: function(todo) {
        var url ='/todos/add';
        var self = this;
        request
            .post(url)
            .send(todo)
            .end(function(err, res) {
                        if (err) {
                            console.log(err)
                        };
                        console.log(res.body)
                        _todos = res.body;
                        self.trigger(_todos);
                    })
    },

    onEdit: function(todo) {
        var self = this;
        var url = '/todos/update';
            request
                .post(url)
                .send(todo)
                .end(function(err, res) {
                    if (err) {
                        console.log(err)
                    };
                    console.log(res.body)
                    console.log(res)
                    _todos = res.body;
                    self.trigger(_todos);
                })
    },

    onFinish: function(todo) {
        var self = this;
        var url = '/todos/update'
        request
            .post(url)
            .send(todo)
            .end(function(err, res) {
                if (err) {
                    console.log(err)
                };
                console.log(res.body)
                console.log(res)
                _todos = res.body;
                self.trigger(_todos);
            })
    },

    onRemove: function(id) {
        var self = this;
        var url = '/todos/del';
        request
            .post(url)
            .send(id)
            .end(function(err, res) {
                if (err) {
                    console.log(err)
                };
                _todos = res.body;
                self.trigger(_todos);
            })
    },


    getTodos: function() {
            return _todos;
    },

    getTodo: function(id) {
        for (var i = 0; i < _todos.length; i++) {
            if (_todos[i]._id === id) {
                return _todos[i]
            };
        };
    },

    fetch: function() {
        return false;
    }
})


module.exports = TodoStore;