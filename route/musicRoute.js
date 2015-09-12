var route = require('koa-route');
var music = require('../controllers/music');
var app = require('../app.js');


//music
app.use(route.get('/music', music.all))

app.use(route.post('/music/addone', music.addone))

app.use(route.post('/music/addlist', music.addlist))

//在客户端实现
//app.use(route.get('/music/latest', music.latest))

app.use(route.post('/music/search', music.search))

app.use(route.post('/music/remove', music.remove))
