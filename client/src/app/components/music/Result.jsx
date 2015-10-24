var React = require('react');

var Result = React.createClass({

    onSelect: function(){
        this.props.onSelect(this.props.song)
    },

    render: function() {
        return (
           <div onClick={this.onSelect} className="result-song">
                <span className="result-songname">{this.props.song.songName}</span>
                <span className="result-username">{this.props.song.userName}</span>
            </div>
        );
    }

});

module.exports = Result;