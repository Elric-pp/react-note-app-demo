var React = require('react');
var TodoStore = require('../../../stores/TodoStore.js');

var TextArea = React.createClass({
    getInitialState: function() {
        return {
            todoText: '' 
        };
    },

    handleChange: function(event) {
        this.setState({
            todoText: event.target.value 
        });
    },

    handleSave: function(){
        this.props.onSave(this.state.todoText, this.props.id);

        if (!this.props.id) {
            console.log(this.refs);
            this.refs.textArea.getDOMNode().value = '';
            this.setState({
                todoText: '' 
            });
        };
    },

    componentWillReceiveProps: function(nextProps) {
        this.setState({
            todoText: nextProps.todoText 
        });

        this.refs.textArea.getDOMNode().focus();

        if (!nextProps.id) {
            this.refs.textArea.getDOMNode().focus();
        };
    },

    render: function() {
        return (
            <div className="todo-text-wrap">
                <input className="ant-input" ref="textArea"  value={this.state.todoText} onChange={this.handleChange}></input>
                <a className="ant-btn ant-btn-primary ant-btn-sm todo-text-save "  onClick={this.handleSave} >save</a>    
            </div>
        );
    }
});

module.exports = TextArea;