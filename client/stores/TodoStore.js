var Reflux = require('reflux');
var request = require('superagent')
var TodoActions = require('../actions/TodoActions');
// var Q = require('q');
// var defer = Q.defer();
var host = 'http://localhost:3000/'
var _todos = [];

var TodoStore = Reflux.createStore({
    init: function() {
        this.listenTo(TodoActions.createTodo, this.onCreate);
        this.listenTo(TodoActions.editTodo, this.onEdit);
        this.listenTo(TodoActions.finishTodo, this.onFinish);
        this.listenTo(TodoActions.initialTodo, this.onInit)
    },

    onInit: function(){
        var self = this;
          request
            .get(host + '/todos')
            .end(function(err, res) {
                if (err) {
                    console.log(err)
                };
               _todos = res.body;
               self.trigger(_todos);
            })
    },

    onCreate: function(todo) {
        var url =host + '/todos/add';
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
        var url = host + '/todos/update';
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
        var url = host + '/todos/update'
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

    // onInit: function(){},
    // onCreate: function(todo){
    //     _todos.push(todo);
    //     this.trigger(_todos);
    // },

    // onEdit: function(){
    //     for (var i = 0; i < _todos.length; i++) {
    //         if (_todos[i]._id === todo._id) {
    //             _todos[i].text = todo.todo.text;
    //             this.trigger(_todos);
    //             break;
    //         };
    //     };
    // },

    // onFinish: function(){
    //     for (var i = 0; i < _todos.length; i++) {
    //         if (_todos[i]._id === todo._id) {
    //             _todos[i].done = todo.todo.done;
    //             this.trigger(_todos);
    //             break;
    //         };
    //     };
    // },

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