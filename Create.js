import fs from "fs";
import Post from "./Post.js";

const file = "Todos.json"

const Create = async (req, res) => {
    try {
        const id = Number(new Date())
        const name = req.body.name
        const date = new Date()
        const todos = []

        const todo = {
            uuid: id,
            name: name,
            done: false,
            created_at: date
        }

        fs.readFile(file, (data) => {
            todos = JSON.parse(data);
            todos.push(todo);
            res.send(todo);
            Post(todos)
        })
    } catch (e) {
        res.status(500).json(e)
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