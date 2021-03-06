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

		Email.EnviarCorreo(
			req.body.Correo,
			"Pedido Recibido Exitosamente",
			Funcion.DetalleHTML(
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

/**
 * @description Ruta para actualizar el estado de un platillo
 */
app.post("/pedido/actualizacion", async (req, res) => {
	try {
		console.log(req.body.Id_Factura);
		console.log(req.body.Estado);
		const Metadata = await db.query(
			Consulta.ActualizarPedido(req.body.Id_Factura, req.body.Estado)
		);
	    		
		if (Metadata.rowCount > 0) {
			let Correo = "";
			Metadata.rows.forEach((element) => {
				Correo = element.actualizarestadofactura;
			});

			Email.EnviarCorreo(
				Correo,
				"Seguimiento de Pedido",
				Funcion.ActualizarHTML(req.body.Id_Factura, req.body.Estado)
			);
		}

		res.status(200).json();
	} catch (error) {
		res.status(500).send(error);
	}
});

/**
 * @description Ruta para Crear un Nuevo Empleado
 */
app.post("/empleado/nuevo", async (req, res) => {
	try {
		
		const Metadata = await db.query(Consulta.NuevoEmpleado(
			req.body.Nombre,
			req.body.Apellido,
			req.body.Telefono,
			req.body.Correo,
			req.body.Password,
			req.body.Direccion,
			2
		));
		res.status(200).json();
	} catch (error) {
		res.status(500).send(error);
	}
});

/**
 * @description Ruta para actualizar informacion de un empleado
 */
app.put('/empleado/actualizacion', async (req, res)=>{
	try {

		const Metadata = await db.query(Consulta.ActualizarEmpleado(req.body.Id_Empleado,
			req.body.Nombre,
			req.body.Apellido,
			req.body.Telefono,
			req.body.Correo,
			req.body.Password,
			req.body.Direccion,
			req.body.Tipo));
		res.status(200).json(Metadata.rows);
	} catch (error) {
		res.status(500).send(error);
	}
});

/**
 * @description Ruta para Elimnar un Empleado
 */
app.post('/empleado/eliminar', async (req, res)=>{
	try {
		const Metadata = await db.query(Consulta.EliminarEmpleado(req.body.Id_Empleado));
		res.status(200).json();
	} catch (error) {
		res.status(500).send(error);
	}
});

/**
 * @description Ruta para obtener la informacion de un Administrador, Empleado o Usuario dado un ID
 */
app.get('/usuario/informacion/:Id_Persona', async (req, res)=>{
	try {
		const Metadata = await db.query(Consulta.ObtenerInformacion(req.params.Id_Persona));
		res.status(200).json(Metadata.rows);
	} catch (error) {
		res.status(500).send(error);
	}
});


/**
 * @description Ruta para obtener la informacion de una factura
 */
app.get('/usuario/factura/:Id_Factura', async (req, res)=>{
	try {
		const Metadata = await db.query(Consulta.ObtenerInformacionFactura(req.params.Id_Factura));

		if(Metadata.rowCount>0){
			res.status(200).json(Metadata.rows);
		}else{
			res.status(400).json()
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

/**
 * @description Ruta para Loguear un Usuario
 */
app.get('/usuario/login/:Correo/:Password', async (req, res)=>{
try {
	const Metadata = await db.query(Consulta.VerificarUsuario(req.params.Correo, req.params.Password));

	if(Metadata.rowCount > 0){
		res.status(200).json(Metadata.rows);
	}else{
		res.status(400).json();
	}
} catch (error) {
	res.status(500).send(error);
}
});


module.exports = app;
