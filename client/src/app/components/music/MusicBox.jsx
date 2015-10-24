var React = require('react');
var MusicCtrl = require('./MusicCtrl.jsx');
var PlayList = require('./PlayList.jsx');
var Search = require('./Search.jsx');
var MusicActions = require('../../../actions/MusicActions.js')
var MusicStore = require('../../../stores/MusicStore.js')
require('./style/music.scss')

var MusicBox = React.createClass({
    getInitialState: function() {
        MusicActions.initialMusic();
        return {
            curSong: null,
            musicList: [],
            index: 0,
            status: 'pause',
            search: true,
            resultList: []
        };
    },

    onChange: function(res){
        console.log(res);
        if (res.to==='musicList') {
            this.onMusic(res.data);
        } else if (res.to==='resultList') {
            this.onResult(res.data);
        };

    },

    onMusic: function(list){
        this.setState({
            musicList: list 
        });
        if (!this.state.curSong) {
            this.setState({
                curSong: this.state.musicList[0] 
            });
        };
    },

    onResult: function(list){
        this.setState({
            resultList: list 
        });
    },

    componentDidMount: function() {
        console.clear();
        console.log(MusicStore);
        console.log(this)
        this.unsubscribe = MusicStore.listen(this.onChange);
    },

    componentWillUnmount: function() {
        this.unsubscribe();
    },

    onSelect: function(index) {
        var song = this.state.musicList[index]
        this.setState({
            curSong: song,
            index: index
        });
        console.log(this.state.curSong)
    }, 

    play: function() {
        console.log('play')
        document.getElementById('music').play();
        this.setState({
            status: 'playing'
        });
    },

    prev: function() {
        console.log(this.setState)
        var index = this.state.index;
        if (index==0) {
            index = this.state.musicList.length-1;
            this.setState({
                index : index
            });
        } else {
            index--;
            this.setState({
                index: index 
            }, function(){
                document.getElementById('music').play();
            });
        }
        var song = this.state.musicList[index];
        this.setState({
            curSong : song 
        });
    },

    pause: function() {
        console.log('pause');
        document.getElementById('music').pause();
        this.setState({
            status: 'pause' 
        });
    },


    next: function() {
        document.getElementById('music').pause();
        var index = this.state.index;
        if (index==this.state.musicList.length-1) {
            index = 0;
            this.setState({
                index : 0
            });
        } else {
            index++;
            this.setState({
                index: index 
            }, function(){
                document.getElementById('music').play();
            });
        }
        var song = this.state.musicList[index];
        this.setState({
            curSong : song 
        });

    },


    onSearch: function(str){
        this.setState({
            resultList: [] 
        });
        MusicActions.search(str);
    },

    onAdd: function(song){
        MusicActions.addSong(song);
    },

    render: function() {
        return (
            <div className="music-wrap">
                <div className="music-box">
                    <PlayList  onSelect={this.onSelect} musicList={this.state.musicList} />
                    <MusicCtrl song={this.state.curSong} status={this.state.status} play={this.play} pause={this.pause} next={this.next} prev={this.prev} />
                </div>
                <Search onAdd={this.onAdd} onSearch={this.onSearch} result={this.state.resultList} show={this.state.search} />
            </div>
        );
    }

});

module.exports = MusicBox;