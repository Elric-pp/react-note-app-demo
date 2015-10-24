var React = require('react');

var Song = React.createClass({

    onSelect: function() {
        this.props.onSelect(this.props.index);
    },

    render: function() {
        return (
            <div onClick={this.onSelect} className="music-song">
                <span className="music-songname">{this.props.music.songName}</span>
                <span className="music-username">{this.props.music.userName}</span>
            </div>
        );
    }

});

module.exports = Song;