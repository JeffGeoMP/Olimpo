const { Router } = require("express");
const { Consultas } = require("../Funciones/Consultas");
const { EnviarInformacion } = require('../Funciones/Nodemailer');

const db = require("../../config");

const Consulta = new Consultas();
const Email = new EnviarInformacion();
const app = Router();


/**
 * @description Ruta para el procesamiento de un nuevo pedido,
 * esta realiza una transaccion en la Base de datos.
 */
app.post("/pedido/nuevo", async (req, res) => {
      try {
            await db.query(Consulta.NuevoPedido(
                  req.body.Nombre,
                  req.body.Apellido,
                  req.body.Nit,
                  req.body.Telefono,
                  req.body.Correo,
                  req.body.Total,
                  req.body.Productos,
                  req.body.Direccion
            ));
            
            Email.EnviarFactura(req.body.Correo, 'Hola');

            res.status(200).json();
      } catch (error) {
            res.status(500).send(error);
      }
});

module.exports = app;
