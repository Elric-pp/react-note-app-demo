var React = require('react');
var TodoList = require('./TodoList.jsx');
var TodoActions = require('../../../actions/TodoActions.js');
var TodoStore = require('../../../stores/TodoStore.js');

var TodoListBox = React.createClass({
    getInitialState: function(){
        TodoActions.initialTodo()
        return {todos: []}
    },

    onChange: function(todos) {
        this.setState({
            todos: todos
        });
    },

    componentDidMount: function() {
        this.unsubscribe = TodoStore.listen(this.onChange);
    },

    componentWillUnmount: function() {
        this.unsubscribe();
    },

    handleFinish: function(todo) {
        TodoActions.finishTodo({_id: todo._id, todo:{done: todo.done}});
    },

    handleRemove: function(id) {
        TodoActions.removeTodo({_id: id});
    },

    render: function() {
        return (
            <div className="todo-list-wrap">
                <TodoList ref="todoList" todos={this.state.todos} onEdit={this.props.onEdit} 
                    onFinish={this.handleFinish} onRemove={this.handleRemove} activeTodoId={this.props.activeTodoId} />
            </div>
        )
    }
});

module.exports = TodoListBox;