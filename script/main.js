"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const Productos_ts_1 = require("./Productos.ts");
const app = (0, express_1.default)();
const port = 3000;
const producto = new Productos_ts_1.Productos();
const dbPath = '../database/Proyecto_Practica_CRUD_dataBase.db';
const corsOptions = {
    origin: 'http://localhost:5500',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};
app.use((0, cors_1.default)(corsOptions));
app.get('/obtener-datos', (req, res) => {
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
app.listen(port, () => {
    console.log('servidor iniciado en: http://localhost:' + port);
});
