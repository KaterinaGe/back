import fs from "fs";

const file = "todos.json"

async function write(todos) {
    todos = JSON.stringify(todos)
    fs.writeFile(file, todos, (err) => {
        if (err) throw new Error('Error')
    })
}

function read () {
    return new Promise (function (resolve, reject) {
        let todos = []
        fs.readFile(file,'utf-8', (e, data) => { 
            if (data !== "") {
                todos = JSON.parse(data)
            }
            if (e) reject("error")
            resolve(todos)    
        })
    })
}

export { write, read }