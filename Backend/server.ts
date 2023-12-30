
import express, { Request, Response } from 'express';
import { Productos } from './Productos';
const app = express();
const PORT = 3000;
const producto = new Productos();
const dbPath = '../database/Proyecto_Practica_CRUD_dataBase.db';

app.use(express.json());

//return website:

app.get('/', (request: Request, response: Response)=>{

        response
            .status(200)
            .sendFile('../index.html');
});



app.get('/obtener-datos', (req:Request, res:Response)=>{
                const rows = producto.allProductsReturn();
                res.json(rows);

   
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

app.listen(PORT, ()=>{
    console.log(`Server running on: http://localhost:${PORT}`);
})