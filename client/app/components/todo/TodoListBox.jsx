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
        console.log(Date.now())
        this.setState({
            todos: todos
        });
    },

    componentDidMount: function() {
        console.log(Date.now())
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
        TodoActions.finishTodo(todo);
    },

    render: function() {
        return (
            <div>
                <div><a href="" onClick={this.onAdd}>Add New</a></div>
                <TodoList ref="todoList" todos={this.state.todos} onEdit={this.props.onEdit} onFinish={this.handleFinish} />
            </div>
        )
    }
});

module.exports = TodoListBox;