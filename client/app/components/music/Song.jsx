var React = require('react');

var Song = React.createClass({

    render: function() {
            console.log(this.props.music)
        return (
            <div>
                <span>{this.props.music.songName}</span>
                <span>{this.props.music.userName}</span>
            </div>
        );
    }

});

module.exports = Song;