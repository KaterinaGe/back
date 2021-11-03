import {write, read} from "./helper.js"

const file = "Todos.json"

const Delete = async (req, res) => {
    try {
        const uuid = req.params.uuid
        let todos = []
        read(todos)
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
}

export default Delete