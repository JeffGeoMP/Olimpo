/**
 * Contiene la conexion a la base de datos
 */
const {Pool} = require('pg');

const db = new Pool({
    user: 'postgres',       //Usuario predefinido en postgresql
    host: 'localhost',      //Ubicacion predefinida
    password: '1234',     //Contraseña de usuario
    database: 'bd_proyectoayd'      //base de datos
});

module.exports = db;