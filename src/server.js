import express from "express";
import cors from 'cors';
import contactsRouter from "./routers/contacts.router.js";


const app = express();
app.use(express.json())
app.use(cors());
app.use(contactsRouter);


app.get("/health" , (req ,res) => res.send("OK!"));


app.listen(4000 , ()=> console.log('server running in port: 4000'));