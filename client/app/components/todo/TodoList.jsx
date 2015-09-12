var React = require('react');
var Todo = require('./Todo.jsx');

var TodoList = React.createClass({
    getInitialState: function() {
        return {
            activeTodoId: null,
            hoverTodoId: null
        };
    },

    setActiveTodo: function(id) {
        this.setState({activeTodoId: id});
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
                            active={self.state.activeTodoId===todo._id}
                            hover={self.state.hoverTodoId===todo._id}
                            todo={todo}
                            onEdit={self.props.onEdit}
                            onSelect={self.setActiveTodo}
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