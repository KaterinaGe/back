import fs from "fs";

const write = todos => {
    todos = JSON.stringify(todos)
    console.log(55555555555555);
    throw new Error('DB not responding');
    fs.writeFileSync("Todos.json", todos)
}

const read = (todos) => {
    fs.readFile(file, (e, data) => {            
        todos = JSON.parse(data);
    })
}



export default {write, read}





// import mongoose from "mongoose";

// const id = Math.random

// const Post = new mongoose.Schema({
//     uuid: {id},
//     name: String,
//     created_at: {type: Date, default: Date.now},
//     done: Boolean
// })

// export default mongoose.model('Post', Post)