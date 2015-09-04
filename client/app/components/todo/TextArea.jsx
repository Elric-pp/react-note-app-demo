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

        if (!nextProps.id) {
            this.refs.textArea.getDOMNode().focus();
        };
    },

    render: function() {
        return (
            <div>
                <input className="text" ref="textArea"  value={this.state.todoText} onChange={this.handleChange}></input><br/>
                <input type="button" className="btn" value="save" onClick={this.handleSave} />    
            </div>
        );
    }
});

module.exports = TextArea;