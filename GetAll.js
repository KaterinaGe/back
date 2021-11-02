import fs from "fs"
//import Post from "./Post.js"

const file = "Todos.json"

const GetAll = async (req, res) => {
    try {
        const todos = []
        fs.readFile(file, (data) => {
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
            res.send(todos)
        })
    } catch (e) {
        res.status(500).json(e)
    }


    // try {
    //     const posts = await Post.find()
    //     return res.json(posts)
    // } catch (e) {
    //     res.status(500).json(e)
    // }
}

export default GetAll