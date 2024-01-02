import path from 'path';
import * as sqlite3 from 'sqlite3';
export class DataBaseConnection{
    private _query:string;
    private dbPath:string = path.join(__dirname,'../database/Proyecto_Practica_CRUD_dataBase.db');
    
        constructor(query:string){
            this._query = query;
            
        }

        /**CreateCnnection will return a promise, and it resolve will containe the connection to the db. */
        async createConnection(){
            return new Promise((resolve, reject)=>{
                const db = new sqlite3.Database(this.dbPath, sqlite3.OPEN_READONLY, (err)=>{
                    if(err){
                        console.error(err.message);
                        reject(err);
                    }else{
                        
                        console.log('Connection was stablish');
                        resolve(db);
                    }
                });
                
                
            });
            
        }

        set newQuery(newQuery:string){
            this._query = newQuery;
        }

        async getQuery(){
            this.createConnection()
                .then((result:any)=>{
                    result.all(this._query, [], (error:any, rows:any)=>{
                        if(error){
                            console.log(error.message);
                        }
                        //console.log(rows)
                        return rows;
                        result.close((err:any)=>{
                            if (err) {
                                console.error(err.message);
                            } else {
                                console.log('Conexión cerrada | Request was complete to DB');
                            }
                        });
                    });
                })
        }

}