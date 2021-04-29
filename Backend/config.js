/**
 * Contiene la conexion a la base de datos
 */
const {Pool} = require('pg');

const db = new Pool({
    user: 'postgres',       //Usuario predefinido en postgresql
    host: 'localhost',      //Ubicacion predefinida
<<<<<<< HEAD
<<<<<<< HEAD
    password: '1234',     //Contraseña de usuario
=======
    password: 'password',     //Contraseña de usuario
>>>>>>> ConsultarPlatillosGerente
=======
    password: 'password',     //Contraseña de usuario
=======
    password: '1234',     //Contraseña de usuario
>>>>>>> develop
>>>>>>> develop
    database: 'BD_ProyectoAyD'      //base de datos
});

module.exports = db;