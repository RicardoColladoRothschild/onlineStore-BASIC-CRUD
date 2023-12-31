"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Productos = void 0;
const sqlite3 = __importStar(require("sqlite3"));
class Productos {
    constructor() {
        this.dbPath = '../database/Proyecto_Practica_CRUD_dataBase.db';
        this.product_name = 'all';
        this.product_price = "0";
    }
    allProductsReturn() {
        let data;
        const db = new sqlite3.Database(this.dbPath, sqlite3.OPEN_READONLY, (err) => {
            if (err) {
                console.error(err.message);
            }
            else {
                console.log('conectado a la data base: ' + this.dbPath);
            }
        });
        const query = 'SELECT * FROM products';
        db.all(query, [], (error, rows) => {
            if (error) {
                console.log(error.message);
                data = error;
            }
            data = rows;
            db.close((err) => {
                if (err) {
                    console.error(err.message);
                }
                else {
                    console.log('Conexión cerrada | Request was complete to DB');
                }
            });
        });
        return data;
    }
}
exports.Productos = Productos;
