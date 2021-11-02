import express from 'express'
//import mongoose from 'mongoose';
import router from './router.js';


const PORT = 5000;

const app = express()

app.use(express.json())
app.use('/', router)

// async function startApp() {
//     try {
//         await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('its working ' + PORT))
//     } catch (e) {
//         console.log(e)
//     }
// }

// startApp()