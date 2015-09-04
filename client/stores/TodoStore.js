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
        this.listenTo(TodoActions.initialTodo, this.onInit)
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
        _todos.push(todo);
        this.trigger(_todos);
        var url = '/todos/add';
        request
            .post(url)
            .send(todo)
            .end(function(err, res) {
                        if (err) {
                            console.log(err)
                        };
                        console.log(res.body)
                    })
    },

    onEdit: function(todo) {
        for (var i = 0; i < _todos.length; i++) {
            if (_todos[i]._id === todo._id) {
                _todos[i].text=todo.text;
                this.trigger(_todos);
                break;
            };
        };
        
    },

    onFinish: function(todo) {
        for (var i = 0; i < _todos.length; i++) {
            if (_todos[i]._id === todo._id) {
                _todos[i].done=todo.done;
                console.log(_todos)
                var url = '/todos/update'
                request
                    .post(url)
                    .send(todo)
                    .end(function(err, res) {
                        if (err) {
                            console.log(err)
                        };
                        console.log(res.body)
                    })
                this.trigger(_todos);
                break;
            };
        };
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