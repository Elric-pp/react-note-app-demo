var React = require('react');
var TextArea = require('./TextArea.jsx');
var TodoActions = require('../../../actions/TodoActions.js');
var TodoStore = require('../../../stores/TodoStore.js');

var TodoCreateBox = React.createClass({
    handleSave: function(todoText, id) {
        if (id) {
            TodoActions.editTodo({_id:id, todo: {text: todoText}});
        } else {
            TodoActions.createTodo({text:todoText, date: Date.now(), done: false})
        }
    },

    render: function() {
        var todo;

        if (this.props.id) {
            todo = TodoStore.getTodo(this.props.id);
        };

        return (
            //<div>
                <TextArea onSave={this.handleSave} id={this.props.id} todoText={todo ? todo.text : ""} onAdd={this.props.onAdd} />
            //</div>    
        );
    }
});

module.exports = TodoCreateBox;
