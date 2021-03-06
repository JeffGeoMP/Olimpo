const { Router } = require("express");
const { Consultas } = require("../Funcionalidades/Consultas");
const { EnviarInformacion } = require("../Funcionalidades/Nodemailer");

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
            console.log(Metadata.rows);
		res.status(200).json();
	} catch (error) {
		res.status(500).send(error);
	}
});

function CrearFactura(Productos, Total) {
	message = "<h2>Gracias por comprar en Olimpo Restaurant</h2>\n";
	message += "<p>Esperamos que disfrutes tu comida y que vuelvas pronto</p>\n";
	message += "<h3> Tu codigo de pedido es: XXX </h3><br>\n";
	message += "<h4>Descripcion del Pedido:</h4>";
	message += ' <table border="2">\n';
	message += " <tr>\n";
	message += '<th align="center">Codigo Producto</th>\n';
	message += '<th align="center">Producto</th>\n';
	message += '<th align="center">Cantidad</th>\n';
	message += ' <th align="center"> Precio (Q)</th>\n';
	message += ' <th align="center"> Subtotal (Q)</th>\n';
	message += " </tr>\n";
}

module.exports = app;
