import fs from "fs";
import {write, read} from "./helper.js";
import { v4 as uuidv4 } from "uuid";

const file = "Todos.json"

const Create = async (todos, req, res) => {
    try {        
        const todo = {
            uuid: uuidv4(),
            name: req.body.name,
            done: false,
            created_at: new Date()
        }

        todos.push(todo);
        console.log(123);
        write(todos)
        console.log(333333333333333);
        res.send(todo);            
        
    } catch (e) {
        console.log(66666666788777);  
        res.status(500).send(e)
    }


    // try {
    //     const {uuid, name, create_at, done} = req.body
    //     const post = await Post.create({uuid, name, create_at, done})
    //     res.json(post)
    // } catch (e) {
    //     res.status(500).json(e)
    // }
}


export default Create;