import {write, read} from "./helper.js"
import express from 'express'

const getTodos = express.Router()

getTodos.get('/todos', async (req, res) => {
    try {
        
        let todos = []
        todos = await read()
        if (req.query.filterBy === "done") {
            todos = todos.filter((todo) => todo.done === true)
        }
        if (req.query.filterBy === "undone") {
            todos = todos.filter((todo) => todo.done === false)
        }
        if (req.query.order === "asc") {
            todos = todos.sort((a, b) => a.date - b.date)
        }
        if (req.query.order === "desc") {
            todos = todos.sort((a, b) => b.date - a.date)
        }
        res.send(todos)
        
    } catch (e) {
        res.status(404).json(e)
    }
})

export default getTodos