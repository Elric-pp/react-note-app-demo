var React = require('react');

var Todo = React.createClass({
    handleEdit: function(id, event) {
        event.preventDefault();
        this.props.onEdit(id);
        this.props.onSelect(id);
    },

    handleHover: function(id, event) {
        event.stopPropagation();
        this.props.onHover(id);
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

        var active = this.props.active ? 'active ' : "";

        var hover = this.props.hover ? 'show' : "";

        var done = this.props.todo.done ? 'done ' : "";
        return (
                <div className={"todo-item " + active + done}
                         onClick={this.handleEdit.bind(null, todo._id)}
                         onMouseEnter={this.handleHover.bind(null, todo._id)} 
                         onMouseLeave={this.handleHover.bind(null, "")}>
                    {title}
                    <i className={"anticon anticon-check-circle-o pull-right todo-item-icon hide" + hover} onClick={this.handleFinish}></i>
                    <i className={"anticon anticon-cross-circle-o pull-right  todo-item-icon hide" + hover} onClick={this.handleRemove}></i>
                </div>
        )
    }
});

module.exports = Todo;