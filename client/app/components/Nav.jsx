var React = require('react');

var Nav = React.createClass({

    handleClick: function(view){
        this.props.onViewChange(view)
    },

    render: function() {
        return (
            <div className="nav">
                <div className="icon-bar">
                    <span className="anticon icon-todo" onClick={this.handleClick.bind(null, 'todo')} ></span>
                    <span className="anticon icon-music" onClick={this.handleClick.bind(null, 'music')} ></span>
                </div>
                <div className="line"></div>
            </div>
        );
    }

});

module.exports = Nav;