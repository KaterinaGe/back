import Post from "./Post.js"
import fs from "fs"

const file = "Todos.json"

const Update = async (req, res) => {
    try {
        const uuid = req.params.uuid
        const name = req.body.name
        const done = req.body.done
        const todos = []
        fs.readFile(file, (data) => {
            todos = JSON.parse(data)
            todos = todos.map((todo) => {
                if (todo.uuid === uuid) {
                    todo.name = name
                    todo.done = done
                }
                return todo
            })
            res.send(todos)
            Post(todos)
        })
    } catch (e) {
        res.status(500).json(e)
    }


    // try {
    //     const post = req.body
    //     if (!post._id) {
    //         res.status(400).json({message: 'Id not specified'})
    //     }
    //     const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
    //     return res.json(updatedPost)
    // } catch (e) {
    //     res.status(500).json(e)
    // }
}

export default Update