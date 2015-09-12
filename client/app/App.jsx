var React = require('react');
var TodoApp = require('./components/todo/TodoApp.jsx');
var MusicBox = require('./components/music/MusicBox.jsx');

var App = React.createClass({

    render: function() {
        return (
            <div>
                <TodoApp />
                <MusicBox />
            </div>
        );
    }

});

module.exports = App;