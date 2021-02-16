/**
 * Contiene la conexion a la base de datos
 */
const {Pool} = require('pg');

const db = new Pool({
    user: 'postgres',       //Usuario predefinido en postgresql
    host: 'localhost',      //Ubicacion predefinida
    password: '302016',     //Contraseña de usuario
    database: 'Olimpo'      //base de datos
});

module.exports = db;