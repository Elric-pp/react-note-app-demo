var React = require('react');

var MusicCtrl = React.createClass({

    render: function() {
        var self = this;
        var audio = (function(){
            console.log(self.props)
            if (self.props.song) {
                var songUrl = self.props.song.songUrl;
                return (<audio src={songUrl} controls/>)
            } else {
                return (<div></div>)
            }
        })()
        return (
            <div>{audio}</div>
        );
    }

});

module.exports = MusicCtrl;