var React = require('react');

var Todo = React.createClass({
    handleEdit: function(id, event) {
        event.preventDefault();
        this.props.onEdit(id);
        this.props.onSelect(id);
    },

    handleFinish: function(event) {
        console.log(event.target)
        event.stopPropagation();
        this.props.todo.done = !this.props.todo.done;
        this.props.onFinish(this.props.todo)
    },

    handleRemove: function(event) {
        event.stopPropagation();
        this.props.onRemove(this.props.todo._id)
    },

    render: function() {
        var todo = this.props.todo;

        var title = todo.text.length >= 20 ? todo.text.substring(0, 20) : todo.text;

        var active = this.props.active ? 'active ' : null;

        var done = this.props.todo.done ? 'done ' : null;
        return (
                <div className={"todo-item " + active + done} onClick={this.handleEdit.bind(null, todo._id)}>
                    {title}
                    <i className="anticon anticon-check-circle-o pull-right" onClick={this.handleFinish}></i>
                    <i className="anticon anticon-cross-circle-o pull-right" onClick={this.handleRemove}></i>
                </div>
        )
    }
});

module.exports = Todo;