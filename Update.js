import Post from "./Post.js"
import fs from "fs"

const file = "Todos.json"

const Update = async (req, res) => {
    try {
        const uuid = req.params.uuid
        const name = req.body.name
        const done = req.body.done
        let todos = []
        fs.readFile(file, (e, data) => {
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
        return res.status(500).json({
            message: 'File Write Failed',
            error: err
        });
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