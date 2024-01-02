import path from 'path';
import * as sqlite3 from 'sqlite3';
export class DataBaseConnection{
    private _query:string;
    private dbPath:string = path.join(__dirname,'../database/Proyecto_Practica_CRUD_dataBase.db');

        constructor(query:string){
            this._query = query;
            this.createConnection()
                .then(resolve=>console.log(resolve))
                .catch(error=>console.log(error));
        }

        async createConnection(){
            return new Promise((resolve, reject)=>{
                const db = new sqlite3.Database(this.dbPath, sqlite3.OPEN_READONLY, (err)=>{
                    if(err){
                        console.error(err.message);
                        reject(err);
                    }else{
                        resolve('Connection to data base was succefully..')
                    }
                });
            });
        }
}