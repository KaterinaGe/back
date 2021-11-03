import fs from "fs"
//import Post from "./Post.js"

const file = "Todos.json"

const GetAll = async (req, res) => {
    try {
        let todos = []
        fs.readFile(file, (e, data) => {
            if (data === "") {
                res.send([]);
                return
            }
            todos = JSON.parse(data)
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
            res.send(todos)
        })
    } catch (e) {
        res.status(404).json(e)
        return send({
            res,
            statusCode: 404,
            message: 'ID not found',
            error: 'Send Valid ID'
        })
    }


    // try {
    //     const posts = await Post.find()
    //     return res.json(posts)
    // } catch (e) {
    //     res.status(500).json(e)
    // }
}

export default GetAll