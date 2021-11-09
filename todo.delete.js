import {write, read} from "./helper.js"
import express from 'express'

const deleteTodo = express.Router()

deleteTodo.delete('/todo/:uuid', async (req, res) => {
    try {
        const uuid = req.params.uuid
        let todos = []

        todos = await read()
        const filteredTodos = todos.filter((todo) => todo.uuid !== uuid)
        write(filteredTodos)
        
    } catch (e) {
        res.status(500).json(e)
    }
})

export default deleteTodo