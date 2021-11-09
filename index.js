import express from 'express'
import create from './todo.post.js'
import deleteTodo from './todo.delete.js'
import getTodos from './todo.get.js';
import update from './todo.put.js';

const PORT = 5000;

const app = express()

app.use(express.json())
app.use('/', create, deleteTodo, getTodos, update)
app.listen(PORT, () => console.log('Its working ' + PORT))