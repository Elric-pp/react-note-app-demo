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

    handleSave: function(event){
        if (event.charCode === 13) {
            this.props.onSave(this.state.todoText, this.props.id);

            //if (!this.props.id) {
                console.log(this.refs);
            this.refs.textArea.getDOMNode().value = '';
            this.refs.textArea.getDOMNode().blur();
            this.setState({
                todoText: '' 
            });
            //};

        };
    },

    handleBlur: function() {
        this.props.onAdd();
    },

    componentWillReceiveProps: function(nextProps) {
        this.setState({
            todoText: nextProps.todoText 
        });

        this.refs.textArea.getDOMNode().focus();

        if (!nextProps.id) {
            this.refs.textArea.getDOMNode().blur();
        };
    },

    render: function() {
        return (
            <div >
                <input  ref="textArea"   className="todo-text-wrap ant-input" 
                             value={this.state.todoText}
                             onChange={this.handleChange}
                             onKeyPress={this.handleSave}
                             onBlur={this.handleBlur} >
                </input>
            </div>
        );
    }
});

module.exports = TextArea;