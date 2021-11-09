import {write, read} from "./helper.js"
import express from 'express'

const update = express.Router()

update.put('/todo/:uuid', async (req, res) => {
    try {
        let todos = []
        
        todos = await read()
        todos = todos.map((todo) => {
            if (todo.uuid === req.params.uuid) {
                todo.name = req.body.name
                todo.done = req.body.done
            }
            return todo
        })
        write(todos)
        res.send(todos)
        
    } catch (e) {
        res.status(500).json(e)
    }
})

export default update