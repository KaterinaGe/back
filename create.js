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


    // try {
    //     const {uuid, name, create_at, done} = req.body
    //     const post = await Post.create({uuid, name, create_at, done})
    //     res.json(post)
    // } catch (e) {
    //     res.status(500).json(e)
    // }
})


export default create;