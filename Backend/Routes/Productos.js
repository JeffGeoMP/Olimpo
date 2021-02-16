const {Router} = require('express');

const app = Router();
const db = require('../config');

/**
 * Ruta de Prueba
 */
app.get('/producto/prueba', async(req,res) =>{
    try {
        const Metadata = await db.query('SELECT * FROM Menu');
        console.log(Metadata.rows);
        Tipos = [];
        Metadata.rows.map((row) =>{
            let Schema ={
                Id_Menu: row[0],
                Menu: row[1]
            };
            Tipos.push(Schema);
        });
        
        res.status(200).json(Tipos);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = app;