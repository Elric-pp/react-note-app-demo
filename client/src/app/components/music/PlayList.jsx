var React = require('react');
var Song = require('./Song.jsx')

var PlayList = React.createClass({


    render: function() {
        var self = this;
        var lis = this.props.musicList.map(function(music, i) {
            return (
                <Song music={music}  onSelect={self.props.onSelect} index={i} />
            );
        })
        return (
            <div className="music-playlist">
                {lis}
            </div>
        );
    }

});

module.exports = PlayList;