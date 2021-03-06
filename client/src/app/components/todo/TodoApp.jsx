var React = require('react');
var TodoListBox = require('./TodoListBox.jsx');
var TodoCreateBox = require('./TodoCreateBox.jsx');
require('./style/todo.scss')

var TodoApp = React.createClass({
    getInitialState: function() {
        return {curEdited: null};
    },

    onEdit: function(id) {
        this.setState({curEdited: id});
    },

    onAdd: function() {
        this.setState({curEdited: null});
    },

    render: function() {
        return (
            <div className="todo-wrap">
                <TodoCreateBox id={this.state.curEdited} onAdd={this.onAdd} />
                <TodoListBox onEdit={this.onEdit} activeTodoId={this.state.curEdited} />
            </div>
        )
    }
});

module.exports = TodoApp;