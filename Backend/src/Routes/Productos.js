const { Router } = require("express");
const { Consultas } = require("../Funcionalidades/Consultas");

const Consulta = new Consultas();
const app = Router();
const db = require("../../config");

/**
 * @description Ruta para pruebas
 */
app.get("/producto/prueba", async (req, res) => {
	try {
		res.status(200).json(Tipos);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.get('/producto/tiposMenu', async(req, res)=>{
	try {
		let result = await db.query(Consulta.typeMenus());
		res.status(200).json(result.rows);
	} catch (error) {
		res.status(500).send(error);
	}
});

/**
 * @description Ruta para obtener el menú del día
 */
app.get("/producto/menu_del_dia", async (req, res) => {
	try {
		const Metadata = await db.query(Consulta.menuDelDia_());

		if (Metadata.rowCount > 0) {
			res.status(200).json(Metadata.rows);
		} else {
			res.status(200).json();
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

/**
 * @description Ruta para obtener el menú del día
 */
 app.post("/producto/actualizar_menu_del_dia", async (req, res) => {
	try {
		const Metadata = await db.query(Consulta.actualizarMenuDelDia(req.body.id));

		if (Metadata.rowCount > 0) {
			res.status(200).json(Metadata.rows);
		} else {
			res.status(200).json();
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

/**
 * @description Ruta para devolver los platillos dado un Tipo de Menu (Desayuno, Almuerzo, Cena, etc)
 */
app.get("/producto/menu/:Tipo_Menu", async (req, res) => {
	try {
		const Metadata = await db.query(
			Consulta.PlatillosPorMenu(req.params.Tipo_Menu)
		);

		if (Metadata.rowCount > 0) {
			res.status(200).json(Metadata.rows);
		} else {
			res.status(200).json();
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

/**
 * @description Ruta para obtener todos los platillos existentes
 */
app.get("/producto/platillos", async (req, res) => {
	try {
		const Metadata = await db.query(Consulta.Platillos());

		if (Metadata.rowCount > 0) {
			res.status(200).json(Metadata.rows);
		} else {
			res.status(200).json();
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

/**
 * @description Ruta para buscar en todos los platillos
 */
app.get("/producto/busqueda/:Palabra", async (req, res) => {
	try {
		const Metadata = await db.query(
			Consulta.BusquedaGeneral(req.params.Palabra)
		);

		if (Metadata.rowCount > 0) {
			res.status(200).json(Metadata.rows);
		} else {
			res.status(200).json();
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

/**
 * @description Ruta para buscar un platillo dado un Tipo de Menu (Desayuno, Almuerzo, Cena, etc)
 */
app.get("/producto/busqueda/:Tipo_Menu/:Palabra", async (req, res) => {
	try {
		const Metadata = await db.query(
			Consulta.BusquedaPorMenu(req.params.Tipo_Menu, req.params.Palabra)
		);

		if (Metadata.rowCount > 0) {
			res.status(200).json(Metadata.rows);
		} else {
			res.status(200).json();
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

/**
 * @description Ruta para Crear un Nuevo Platillo
 */
app.post("/producto/nuevo", async (req, res) => {
	try {
		const Metadata = await db.query(
			Consulta.NuevoPlatillo(
				req.body.nombre,
				req.body.precio,
				req.body.descripcion,
				req.body.id_platillo,
				req.body.imagen
			)
		);

		res.status(200).json();
	} catch (error) {
		res.status(500).send(error);
	}
});

/**
 * @description Ruta para actulizar la informacion de un platillo
 */
app.put("/producto/actualizar", async (req, res) => {
	try {
		const Metadata = await db.query(
			Consulta.ActualizarPlatillo(
				req.body.id_platillo,
				req.body.nombre,
				req.body.precio,
				req.body.descripcion,
				req.body.imagen
			)
		);
		res.status(200).json();
	} catch (error) {
		res.status(500).send(error);
	}
});

/**
 * @description Ruta para Eliminar un Platillo Existente
 */
app.delete('/producto/eliminar/:id', async(req, res)=>{
    try {
		const Metadata = await db.query(Consulta.EliminarPlatillo(req.params.id));
        res.status(200).json();
    } catch (error) {
        res.status(500).send(error);
    }
});

/**
 * @description Ruta para obtener todos los pedidos extistentes en la BD
 */
app.get('/pedidos', async(req,res)=>{
	try {
		const Metadata = await db.query(Consulta.ObtenerPedidos());
		res.status(200).json(Metadata.rows);
	} catch (error) {
		res.status(500).send(error);
	}
});

/**
 * @description Obtener Detalle de una Factura
 */
app.get('/pedidos/detalle/:Id_Factura', async (req, res) =>{
	try {
		const Metadata = await db.query(Consulta.ObtenerDetalleFactura(req.params.Id_Factura));

		if(Metadata.rowCount > 0){
			res.status(200).json(Metadata.rows);
		}else{
			res.status(400).json();
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

/**
 * @description Ingresa una nueva valorizacion de un platillo
 */
app.post('/pedidos/valoracion', async(req, res)=>{
	try {
		const Metadata = await db.query(Consulta.AñadirValoracion(req.body.Platillos));
		
		if(Metadata.rowCount > 0){
			res.status(200).json();
		}else{
			res.status(400).json({Message: "No Se Añadio la Valoracion"});
		}
		res.status(200).json();
	} catch (error) {
		res.status(500).send(error);
		console.log(error)
	}
});

//SISTEMA DE VALORACION Y ESTRELLAS 

//Retorna un listado de los productos con su punteo promedio http://localhost:3000/producto/valoracion
app.get("/producto/valoracion", async (req, res) => {
	try {
		const Metadata = await db.query(
			Consulta.ValoracionPlatillo()
		);

		if (Metadata.rowCount > 0) {
			res.status(200).json(Metadata.rows);
		} else {
			res.status(200).json();
		}
	} catch (error) {
		res.status(500).send(error);
	}
});
// Obtener nombre de platillo en base a su id  http://localhost:3000/producto/valoracion/:idPlatillo
app.get("/producto/valoracion/:idPlatillo", async (req, res) => {
	try {
		const Metadata = await db.query(
			Consulta.getPlatillo(req.params.idPlatillo)
		);

		if (Metadata.rowCount > 0) {
			res.status(200).json(Metadata.rows[0]);
		} else {
			res.status(200).json();
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

// Obtener nombre de platillo en base a su id  http://localhost:3000/producto/valoracion/:idPlatillo
app.post("/comentario", async (req, res) => {
	try {
		const Metadata = await db.query(Consulta.getComentario(req.body.id));
		
		if (Metadata.rowCount > 0) {
			res.status(200).json(Metadata.rows);
		} else {
			res.status(200).json();
		}
	} catch (error) {
		res.status(500).send(error);
	}
});


// obtine el top 5 de platillos
app.get("/producto/topplatillo", async(req, res) => {
	try {
		//console.log(Consulta.topplatillo());
		const Metadata = await db.query(
			Consulta.topplatillo()
		);
		
		console.log(Metadata);

		if (Metadata.rowCount > 0) {
			res.status(200).json(Metadata.rows);
		} else {
			res.status(200).json();
		}
	} catch (error) {
		res.status(500).send(error);
	}
});




module.exports = app;
