var React = require('react');

var Todo = React.createClass({
    handleEdit: function(id, event) {
        event.preventDefault();
        this.props.onEdit(id);
        this.props.onSelect(id);
    },

    handleFinish: function() {
        console.log(!this.props.todo.done)
        this.props.todo.done = !this.props.todo.done;
        console.log(this.props.todo)
        this.props.onFinish(this.props.todo)
    },

    render: function() {
        var todo = this.props.todo;

        var title = todo.text.length >= 20 ? todo.text.substring(0, 20) : todo.text;

        var active = this.props.active ? 'active ' : null;

        var done = this.props.todo.done ? 'done ' : null;
        return (
                <div href="javascript:;" className={"todo-item " + active + done} onClick={this.handleEdit.bind(null, todo._id)}>
                    {title}
                    <a onClick={this.handleFinish}>done</a>
                </div>
        )
    }
});

module.exports = Todo;