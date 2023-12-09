import cors from 'cors';
import express, { Request, Response } from 'express';
import { Productos } from './script/Productos.js';
const app = express();
const port = 3000;
const producto = new Productos();
const dbPath = '../database/Proyecto_Practica_CRUD_dataBase.db';


const corsOptions = {
    origin: 'http://localhost:5500', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
    optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

app.get('/obtener-datos', (req:Request, res:Response)=>{

                res.json();

   
/*
db.all(query, [], (error,rows)=>{
    if(error){
        console.log(error.message);
        res.status(500).json({ error: 'Error al obtener datos' });

    }else{
        console.log('Resultado consulta:');
        //console.log(rows);
        res.json(rows);
    }
    
});*/

});

app.listen(port, ()=>{
    console.log('servidor iniciado en: http://localhost:'+port);
})