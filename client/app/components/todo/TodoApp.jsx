var React = require('react');
var TodoListBox = require('./TodoListBox.jsx');
var TodoCreateBox = require('./TodoCreateBox.jsx');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {id: null};
    },

    onEdit: function(id) {
        this.setState({curEdited: id});
    },

    onAdd: function() {
        this.setState({curEdited: null});
    },

    render: function() {
        return (
            <div>
                <TodoListBox onEdit={this.onEdit} onAdd={this.onAdd}/>
                <TodoCreateBox id={this.state.curEdited}/>
            </div>
        )
    }
});

module.exports = TodoApp;