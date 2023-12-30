import express, { Request, Response } from 'express';
import path from 'path';
import { Productos } from './Productos';
const app = express();
const PORT = 3000;
const producto = new Productos();
const dbPath = '../database/Proyecto_Practica_CRUD_dataBase.db';

app.use(express.json());

//return website:

app.get('/index', (request: Request, response: Response)=>{
            const indexPath = path.join(__dirname, '../index.html');
        response
            .status(200)
            .sendFile(indexPath);
});

async function retrieveData(req:Request, res:Response){
    const rows =  await producto.allProductsReturn();
    console.log(rows);
    res.json(rows);
    

}

app.get('/obtener-datos', retrieveData);

app.listen(PORT, ()=>{
    console.log(`Server running on: http://localhost:${PORT}`);
})