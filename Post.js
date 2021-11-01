import mongoose from "mongoose";

const id = Math.random
const date = new Date

const Post = new mongoose.Schema({
    uuid: {id},
    name: {
        type: String, 
        required: true
        },
    created_at: {date},
    done: {type: Boolean}
})

export default mongoose.model('Post', Post)