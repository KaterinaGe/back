import Post from "./Post.js"
import fs from "fs"

const file = "Todos.json"

const Delete = async (req, res) => {
    try {
        const uuid = req.params.uuid
        let todos = []
        fs.readFile(file, (e, data) => {
            todos = JSON.parse(data)
            const filteredTodos = todos.filter((todo) => todo.uuid !== uuid)
            Post(filteredTodos)
        })
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
}

export default Delete