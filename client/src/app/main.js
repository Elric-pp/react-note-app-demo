'use strict';

//import request from 'superagent';

var React = require('react');
var App = require('./App.jsx')
     
main();

function main() {
    React.render(<App/>, document.getElementById('app'));
}