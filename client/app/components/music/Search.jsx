var React = require('react');
var Result = require('./Result.jsx')

var Search = React.createClass({
    handleEnter: function(event){
        console.log(event);
        if (event.charCode===13) {
            var str = this.refs.searchArea.getDOMNode().value;
            this.props.onSearch(str);
        };
    },

    render: function() {
        var self = this;
        var style = this.props.show ? {display: 'flex'} : {display: 'none'};
        var list = this.props.result.map(function(song) {
            return (<Result song={song} onSelect={self.props.onAdd}/>)
        })
        return (
            <div style={style} className="search-wrap">
                <div className="ant-input search-box" >
                    <input ref="searchArea"   onKeyPress={this.handleEnter} className="input"></input>
                    <i className="anticon anticon-search"></i>
                </div>
                <div className="search-list">
                    {list}
                </div>
            </div>
        );
    }

});

module.exports = Search;