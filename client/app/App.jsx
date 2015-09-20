var React = require('react');
var TodoApp = require('./components/todo/TodoApp.jsx');
var MusicBox = require('./components/music/MusicBox.jsx');
var Nav = require('./components/Nav.jsx');
require('./base.scss')

var App = React.createClass({
    getInitialState: function() {
        return {
            curview: 'todo' 
        };
    },

    changeView: function(view) {
        this.setState({
            curview: view 
        });
    },

    render: function() {
        var view = () => {
            if (this.state.curview==='todo') {
                return (<TodoApp />)
            } else if (this.state.curview==='music') {
                return (<MusicBox />)
            };
        }()
  
        return (
            <div className="container">
                    <div className="component">
                        {view}
                    </div>
                    <Nav onViewChange={this.changeView} />

            </div>
        );
    }

});

module.exports = App;