/**
 * Contiene la conexion a la base de datos
 */
const {Pool} = require('pg');

const db = new Pool({
    user: 'postgres',       //Usuario predefinido en postgresql
    host: 'localhost',      //Ubicacion predefinida
<<<<<<< HEAD
    password: '6214',     //Contraseña de usuario
=======
    password: '123456',     //Contraseña de usuario
>>>>>>> Imagenes_menu
    database: 'BD_ProyectoAyD'      //base de datos
});

module.exports = db;