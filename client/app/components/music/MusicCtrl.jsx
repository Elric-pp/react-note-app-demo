var React = require('react');

var MusicCtrl = React.createClass({

    render: function() {
        var self = this;
        var btn = (function(){
            if (self.props.status === 'pause') {
                return (<span className="play box-item" onClick={self.props.play} ><i className="anticon anticon-caret-right"></i></span>)
            } else if (self.props.status === 'playing') {
                return (<span className="pause box-item" onClick={self.props.pause} ><i className="anticon anticon-pause"></i></span>)
            };
        })();
        console.log(btn);

        
        var audio = (function(){
            console.log(self.props)
            if (self.props.song) {
                var songUrl = self.props.song.songUrl;
                return (<audio id="music" src={songUrl}/>)
            }
        })()

        var img = (()=>{
            console.log(this.props.song)
            if (this.props.song) {
                return (<img src={this.props.song.albumPic} className="info-img" />)
            }
        })();
        return (
            <div className="music-ctrl" >
                {audio}
                <div className="play-info">
                    {img}
                </div>
                <div className="play-box">
                    <div className="play-status">
                            <span className="progress box-item"><span className="len"></span></span>
                            <span className="time box-item">03:13</span>
                    </div>
                    <div className="play-ctrl">
                            <span className="prev box-item" onClick={this.props.prev} ><i className="anticon anticon-step-backward"></i></span>
                            {btn}
                            <span className="next box-item" onClick={this.props.next} ><i className="anticon anticon-step-forward"></i></span>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = MusicCtrl;