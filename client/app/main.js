'use strict';

//import request from 'superagent';

var React = require('react');
var TodoApp = require('./components/todo/TodoApp.jsx');

     
main();

function main() {
    React.render(<TodoApp/>, document.getElementById('app'));
}