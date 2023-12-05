import * as sqlite3 from 'sqlite3';

const dbPath = '../Proyecto_Practica_CRUD_dataBase.db';

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err)=>{
    if(err){
        console.error(err.message);
    }else{
        console.log('conectado a la data base: ' + dbPath);
    }
});

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