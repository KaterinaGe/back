import express from 'express'
import create from './routers/todo.post.js'
import deleteTodo from './routers/todo.delete.js'
import getTodos from './routers/todo.get.js';
import update from './routers/todo.put.js';

const PORT = 5000;

const app = express()

app.use('/', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', `*`);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json())
app.use('/', create, deleteTodo, getTodos, update)
app.listen(PORT, () => console.log('Its working ' + PORT))