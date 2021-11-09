import { write, read } from "./helper.js";
import { v4 as uuidv4 } from "uuid";
import express from 'express'

const create = express.Router()

create.post('/todo', async (req, res) => {
    try {
        let todos = []
        const todo = {
            uuid: uuidv4(),
            name: req.body.name,
            done: false,
            created_at: new Date()
        }

        todos = await read()
        todos.push(todo);
        write(todos)
        res.send({todo});            
        
    } catch (e) {
        
        res.status(500).send(e)
    }
})


export default create;