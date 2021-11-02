import fs from "fs";

const Post = (todos) => {
    todos = JSON.stringify(todos)
    try {
        fs.writeFileSync("Todos.json", todos)
    } catch (e) {
        res.status(500).json(e)
    }
}

export default Post





// import mongoose from "mongoose";

// const id = Math.random

// const Post = new mongoose.Schema({
//     uuid: {id},
//     name: String,
//     created_at: {type: Date, default: Date.now},
//     done: Boolean
// })

// export default mongoose.model('Post', Post)