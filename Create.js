import fs from "fs";
import Post from "./Post.js";
import { v4 as uuidv4 } from "uuid";

const file = "Todos.json"

const Create = async (req, res) => {
    try {
        const id = uuidv4()
        const name = req.body.name
        const date = new Date()
        let todos = []

        const todo = {
            uuid: id,
            name: name,
            done: false,
            created_at: date
        }

        fs.readFile(file, (e, data) => {
            todos = JSON.parse(data);
            todos.push(todo);
            res.send(todo);
            Post(todos)
        })
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
}


export default Create;