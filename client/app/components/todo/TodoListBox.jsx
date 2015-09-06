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

    onAdd: function(event) {
        event.preventDefault();
        this.props.onAdd();
        this.refs.todoList.setActiveTodo(null);
    },

    handleFinish: function(todo) {
        TodoActions.finishTodo({_id: todo._id, todo:{done: todo.done}});
    },

    render: function() {
        return (
            <div className="todo-list-wrap">
                <div><a href="" onClick={this.onAdd}>Add New</a></div>
                <TodoList ref="todoList" todos={this.state.todos} onEdit={this.props.onEdit} onFinish={this.handleFinish} />
            </div>
        )
    }
});

module.exports = TodoListBox;