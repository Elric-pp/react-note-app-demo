var route = require('koa-route');
var todos = require('../controllers/todos');
var app = require('../app.js');

//todo
app.use(route.get('/todos', todos.all))

app.use(route.post('/todos/add', todos.add))

app.use(route.post('/todos/del', todos.remove))

app.use(route.post('/todos/update', todos.update))