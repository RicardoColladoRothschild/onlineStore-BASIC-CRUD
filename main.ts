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

app.get('/obtener-data', (req:Request, res:Response)=>{
    const query = 'SELECT * FROM products';

db.all(query, [], (error,rows)=>{
    if(error){
        console.log(error.message);
    }else{
        console.log('Resultado consulta:');
        console.log(rows);
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