import express from 'express';
import cors from "cors";
import itensRouter from "./item-router";

const port = process.env.port || 4000;
const hostname = process.env || "http://localhost/";
const app = express();

//Home
app.get("/", (req, res) => {
  res.send("bem-vindo");
});

// JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//cors
app.use(cors({
    origin: ['https://localhost:4000/']
}))

app.use('/api', itensRouter)
//resposta padrao para quiasquer outras requisoções
app.use((req,res) =>{
    res.status(404)
})
//iniciar servidor 
app.listen(port, () =>{
    console.log('Server listening on port ${port}');
})