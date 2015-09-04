var React = require('react');
var TextArea = require('./TextArea.jsx');
var TodoActions = require('../../../actions/TodoActions.js');
var TodoStore = require('../../../stores/TodoStore.js');

var TodoCreateBox = React.createClass({
    handleSave: function(todoText, id) {
        if (id) {
            TodoActions.editTodo({_id:id, text: todoText});
        } else {
            TodoActions.createTodo({text:todoText, date: Date.now(), done: false})
            //修改_id
        }
    },

    render: function() {
        var todo;

        if (this.props.id) {
            todo = TodoStore.getTodo(this.props.id);
        };

        return (
            <div>
                <TextArea onSave={this.handleSave} id={this.props.id} todoText={todo ? todo.text : ""} />
            </div>    
        );
    }
});

module.exports = TodoCreateBox;
