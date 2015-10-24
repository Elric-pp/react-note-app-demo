var React = require('react');
var Todo = require('./Todo.jsx');

var TodoList = React.createClass({
    getInitialState: function() {
        return {
            activeTodoId: null,
            hoverTodoId: null
        };
    },

    setHoverTodo: function(id) {
        this.setState({hoverTodoId: id});
    },

    render: function() {
        var self = this;
        var todos = this.props.todos.concat().reverse();
        var todoNodes = todos.map(function(todo){
            return (
                <Todo key={todo._id}
                            active={self.props.activeTodoId===todo._id}
                            hover={self.state.hoverTodoId===todo._id}
                            todo={todo}
                            onEdit={self.props.onEdit}
                            onFinish={self.props.onFinish}
                            onRemove={self.props.onRemove}
                            onHover={self.setHoverTodo} />
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