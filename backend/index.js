import express from "express"
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import {router} from './Routers/bookRouters.js'
import cors  from 'cors'
const app = express();


app.use(express.json());

app.get('/', (req, res, next) => {
    return res.status(454).send('welcome book store App')
})

app.use(cors())
app.use('/books',router)



mongoose.connect(mongoDBURL).then(() => {
    console.log("DB connected")
    app.listen(PORT, () => {
        console.log(`this is server listen on ${PORT}`)
    })
}).catch((e) => {
    console.log(e);
})