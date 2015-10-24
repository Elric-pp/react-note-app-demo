var Reflux = require('reflux');

var TodoActions = Reflux.createActions([
    "createTodo",
    "editTodo",
    "finishTodo",
    "initialTodo",
    "removeTodo"
]);

module.exports = TodoActions;