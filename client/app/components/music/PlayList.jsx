var React = require('react');
var Song = require('./Song.jsx')

var PlayList = React.createClass({

    render: function() {
        var lis = this.props.musicList.map(function(music) {
            return (
                <Song music={music} />
            );
        })
        return (
            <div>
                {lis}
            </div>
        );
    }

});

module.exports = PlayList;