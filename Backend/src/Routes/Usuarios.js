const format = require("simple.string.format");
const { Router } = require("express");
const { Consultas } = require("../Funcionalidades/Consultas");
const { EnviarInformacion } = require("../Funcionalidades/Nodemailer");
const { Funciones } = require("../Funcionalidades/Funciones");

const db = require("../../config");

const Consulta = new Consultas();
const Email = new EnviarInformacion();
const Funcion = new Funciones();
const app = Router();

/**
 * @description Ruta para el procesamiento de un nuevo pedido,
 * esta realiza una transaccion en la Base de datos.
 */
app.post("/pedido/nuevo", async (req, res) => {
	try {
		let Metadata = await db.query(
			Consulta.NuevoPedido(
				req.body.Nombre,
				req.body.Apellido,
				req.body.Direccion,
				req.body.Telefono,
				req.body.Correo,
				req.body.Nit,
				req.body.Total,
				req.body.Tarjeta,
				req.body.Productos
			)
		);

		Email.EnviarFactura(
			req.body.Correo,
			Funcion.GenerarCodigoHTML(
				req.body.Nombre,
				req.body.Apellido,
				req.body.Telefono,
                req.body.Direccion,
				req.body.Total,
				req.body.Tarjeta,
				Metadata.rows
			)
		);
		res.status(200).json();
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = app;
