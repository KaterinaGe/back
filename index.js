import express from 'express'
import create from './create.js'
import deleteTodo from './delete.js'
import getTodos from './get.js';
import update from './update.js';
//import mongoose from 'mongoose';


const PORT = 5000;

const app = express()

app.use(express.json())
app.use('/', create, deleteTodo, getTodos, update)

// async function startApp() {
//     try {
//         await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('Its working ' + PORT))
//     } catch (e) {
//         console.log(e)
//     }
// }

// startApp()