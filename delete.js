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
    
    // try {
    //     const {id} = req.params
    //     if (!id) {
    //         res.status(400).json({message: 'Id not specified'})
    //     }
    //     const post = await Post.findByIdAndDelete(id)
    //     return res.json(post)
    // } catch (e) {
    //     res.status(500).json(e)
    // }
})

export default deleteTodo