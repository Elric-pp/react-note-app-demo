var React = require('react');
var MusicCtrl = require('./MusicCtrl.jsx');
var PlayList = require('./PlayList.jsx');
var MusicActions = require('../../../actions/MusicActions.js')
var MusicStore = require('../../../stores/MusicStore.js')

var MusicBox = React.createClass({
    getInitialState: function() {
        MusicActions.initialMusic();
        return {
            curSong: null,
            musicList: []
        };
    },

    onChange: function(musicList){
        this.setState({
            musicList: musicList 
        });
        if (!this.state.curSong) {
            this.setState({
                curSong: this.state.musicList[0] 
            });
        };
    },

    componentDidMount: function() {
        this.unsubscribe = MusicStore.listen(this.onChange);
    },

    componentWillUnmount: function() {
        this.unsubscribe();
    },

    onSelect: function(id) {
        this.setState({
            curSong: id 
        });
    }, 

    render: function() {
        return (
            <div>
                <MusicCtrl song={this.state.curSong} />
                <PlayList onSelect={this.onSelect} musicList={this.state.musicList} />
            </div>
        );
    }

});

module.exports = MusicBox;