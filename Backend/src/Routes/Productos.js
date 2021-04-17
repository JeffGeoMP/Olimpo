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
				req.body.Nombre,
				req.body.Precio,
				req.body.Descripcion,
				req.body.Id_Menu,
				req.body.Imagen
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
				req.body.Id_Platillo,
				req.body.Nombre,
				req.body.Precio,
				req.body.Descripcion,
				req.body.Imagen
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
app.delete('/producto/eliminar', async(req, res)=>{
    try {
        const Metadata = await db.query(Consulta.EliminarPlatillo(req.body.Id_Platillo));
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




module.exports = app;
