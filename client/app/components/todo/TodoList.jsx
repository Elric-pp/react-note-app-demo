var React = require('react');
var Todo = require('./Todo.jsx');

var TodoList = React.createClass({
    getInitialState: function() {
        return {
            activeTodoId: null
        };
    },

    setActiveTodo: function(id) {
        this.setState({activeTodoId: id});
    },

    render: function() {
        var self = this;
        var todos = this.props.todos.concat().reverse();
        var todoNodes = todos.map(function(todo){
            return (
                <Todo key={todo._id} active={self.state.activeTodoId===todo._id} todo={todo} onEdit={self.props.onEdit}
                 onSelect={self.setActiveTodo} onFinish={self.props.onFinish} onRemove={self.props.onRemove} />
            )
        });

        return (
            <div>
                {todoNodes}
            </div>
        )
    }
})

module.exports = TodoList;