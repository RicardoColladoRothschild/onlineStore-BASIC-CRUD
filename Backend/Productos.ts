import * as sqlite3 from 'sqlite3';

export class Productos{
    private product_name:string;
    private product_price:string;
    private  dbPath:string = '../database/Proyecto_Practica_CRUD_dataBase.db';
        constructor(){
            this.product_name = 'all';
            this.product_price = "0";
        }

        allProductsReturn(){
            let data:any;
            const db = new sqlite3.Database(this.dbPath, sqlite3.OPEN_READONLY, (err)=>{
                if(err){
                    console.error(err.message);
                }else{
                    console.log('conectado a la data base: ' + this.dbPath);
                }
            });

            const query = 'SELECT * FROM products';

            db.all(query, [], (error,rows)=>{
                    if(error){
                        console.log(error.message);
                        data = error;
                    }

                    data = rows;


                 db.close((err)=>{
                if (err) {
                 console.error(err.message);
                 } else {
                    console.log('Conexión cerrada | Request was complete to DB');
                 }
                 });
            });
            return data;
        }
}