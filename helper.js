import fs from "fs";

const file = "todos.json"

async function write(todos) {
    todos = JSON.stringify(todos)
    fs.writeFileSync(file, todos)
}

function read () {
    return new Promise (function (resolve, reject) {
        let todos
        fs.readFile(file, (e, data) => { 
            todos = JSON.parse(data);
            if (e) {
                reject("error")
            } else {
                resolve(todos)
            }
            
        })
    })
}

export {write, read}





// import mongoose from "mongoose";

// const id = Math.random

// const Post = new mongoose.Schema({
//     uuid: {id},
//     name: String,
//     created_at: {type: Date, default: Date.now},
//     done: Boolean
// })

// export default mongoose.model('Post', Post)