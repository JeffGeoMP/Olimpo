const {Router} = require('express');
const {Consultas } = require('../Funciones/Consultas');

const Consulta = new Consultas();
const app = Router();
const db = require('../../config');

/**
 * @description Ruta para pruebas 
 */
app.get('/producto/prueba', async(req,res) =>{
    try {       
        res.status(200).json(Tipos);
    } catch (error) {
        res.status(500).send(error);
    }
});


/**
 * @description Ruta para devolver los platillos dado un Tipo de Menu (Desayuno, Almuerzo, Cena, etc)
 */
app.get('/producto/menu/:Tipo_Menu', async (req, res) => {
    try {
        const Metadata = await db.query(Consulta.PlatillosPorMenu(req.params.Tipo_Menu));

        if(Metadata.rowCount > 0){
            res.status(200).json(Metadata.rows);
        }else{
            res.status(200).json();
        }
    } catch (error) {
        res.status(500).send(error);
    }
});


/**
 * @description Ruta para obtener todos los platillos existentes
 */
app.get('/producto/platillos', async (req, res) => {
    try {
        const Metadata = await db.query(Consulta.Platillos());
        
        if(Metadata.rowCount > 0){
            res.status(200).json(Metadata.rows);
        }else{
            res.status(200).json();
        }
    } catch (error) {
        res.status(500).send(error);
    }
});


/**
 * @description Ruta para buscar en todos los platillos
 */
app.get('/producto/busqueda/:Palabra', async (req, res) => {
    try {
        const Metadata = await db.query(Consulta.BusquedaGeneral(req.params.Palabra));
        
        if(Metadata.rowCount > 0){
            res.status(200).json(Metadata.rows);
        }else{
            res.status(200).json();
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

/**
 * @description Ruta para buscar un platillo dado un Tipo de Menu (Desayuno, Almuerzo, Cena, etc)
 */
app.get('/producto/busqueda/:Tipo_Menu/:Palabra', async (req, res) => {
    try {
        const Metadata = await db.query(Consulta.BusquedaPorMenu(req.params.Tipo_Menu, req.params.Palabra));
        
        if(Metadata.rowCount > 0){
            res.status(200).json(Metadata.rows);
        }else{
            res.status(200).json();
        }
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = app;