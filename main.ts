import cors from 'cors';
import express, { Request, Response } from 'express';
import * as sqlite3 from 'sqlite3';

const app = express();
const port = 3000;

const dbPath = '../database/Proyecto_Practica_CRUD_dataBase.db';

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err)=>{
    if(err){
        console.error(err.message);
    }else{
        console.log('conectado a la data base: ' + dbPath);
    }
});
const corsOptions = {
    origin: 'http://localhost:5500', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
    optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.get('/obtener-datos', (req:Request, res:Response)=>{
    const query = 'SELECT * FROM products';

db.all(query, [], (error,rows)=>{
    if(error){
        console.log(error.message);
        res.status(500).json({ error: 'Error al obtener datos' });

    }else{
        console.log('Resultado consulta:');
        //console.log(rows);
        res.json(rows);
    }
    db.close((err)=>{
        if (err) {
            console.error(err.message);
          } else {
            console.log('Conexión cerrada');
          }
    });
});

});

app.listen(port, ()=>{
    console.log('servidor iniciado en: http://localhost:'+port);
})