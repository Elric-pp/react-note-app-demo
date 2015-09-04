var route = require('koa-route');
var todos = require('../../controllers/todos');
var app = require('../../app.js');


app.use(route.get('/todos', todos.all))

app.use(route.post('/todos/add', todos.add))

app.use(route.post('/todos/del', todos.del))

app.use(route.post('/todos/update', todos.update))

app.use(route.get('/todos/date', todos.getByDate))