var Reflux = require('reflux');

var TodoActions = Reflux.createActions([
    "createTodo",
    "editTodo",
    "finishTodo",
    "initialTodo"
]);

module.exports = TodoActions;