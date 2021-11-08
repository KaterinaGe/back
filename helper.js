import fs from "fs";

const file = "Todos.json"

const write = todos => {
    todos = JSON.stringify(todos)
    console.log(55555555555555);  
    fs.writeFileSync(file, todos)
}

function read () {
    return new Promise (function (resolve, reject) {
        let todos
        fs.readFile(file, (e, data) => { 
            console.log(11111111111111);             
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