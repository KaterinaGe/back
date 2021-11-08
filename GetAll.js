import fs from "fs"
import {write, read} from "./helper.js"

const file = "Todos.json"

const GetAll = async (req, res) => {
    try {
        let todos = []
        read()  .then(response => {
            todos = todos.concat(response)
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
            res.send(todos)})
        .catch(err => console.log('2', err));
        
    } catch (e) {
        res.status(404).json(e)
    }


    // try {
    //     const posts = await Post.find()
    //     return res.json(posts)
    // } catch (e) {
    //     res.status(500).json(e)
    // }
}

export default GetAll