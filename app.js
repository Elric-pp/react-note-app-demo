'use strict';

var home = require('./controllers/home')
var compress = require('koa-compress');
var logger = require('koa-logger');
var serve = require('koa-static');
var route = require('koa-route');
var koa = require('koa');
var path = require('path');
var app = module.exports = koa();
//var todoRoute = require('./route/todo/route')
var request = require('superagent')


//logger
app.use(logger());

//route
app.use(route.get('/', home.home));
//todo route
require('./route/todoRoute')
//music route
require('./route/musicRoute')

//serve static files
app.use(serve(path.join(__dirname, 'public')));

//压缩
app.use(compress());

if (!module.parent) {
    app.listen(9900);
    console.log('listening on port 3000')
};
