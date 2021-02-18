const {Router} = require('express');
const {Consultas } = require('../Models/Consultas');

const Consulta = new Consultas();
const app = Router();
const db = require('../../config');

/**
 * Ruta de Prueba
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
            res.status(200).json({Resultado: "No hay Platillos para el Menu Especificado"});
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
            res.status(200).json({Resultado: "No hay Platillos"});
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
            res.status(200).json({});
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
            res.status(200).json({Resultado: "No Existen Platillos para la Busqueda"});
        }
    } catch (error) {
        res.status(500).send(error);
    }
});


/**
 * @ignore npm run dev
 * http://localhost:3000/platillos/panqueques.png
 */


module.exports = app;