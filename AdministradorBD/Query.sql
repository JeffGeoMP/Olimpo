---------------------------------------------------- SELECTS DE LAS TABLAS --------------------------------------------
SELECT * FROM Cliente;
SELECT * FROM Platillo;
SELECT * FROM Detalle_Platillo_Pedido;
SELECT * FROM Pedido;
SELECT * FROM Factura;



----------------------------------- CONSULTAS PARA LA ADMINISTRACION DE LA APLICACION ----------------------------------

/*
* @description: Consulta que devuelve el menu a partir si es Almuerzo, Desayuno, Cena
*/
SELECT P.id_platillo, P.nombre, P.precio, P.descripcion, P.imagen 
FROM platillo P  
INNER JOIN menu M ON P.id_menu = M.id_menu  WHERE LOWER(M.menu) = 'palabra a buscar';

/*
* @description: Consulta que devuelve todos los platillos existentes en la BD
*/
SELECT P.id_platillo, P.nombre, P.precio, P.descripcion, P.imagen 
FROM platillo P;

/*
* @description: Cosnulta que realiza una busqueda dada una palabra y un tipo de menu (Almuerzo, Desayuno, Cena)
*/
SELECT P.id_platillo, P.nombre, P.descripcion, P.precio, P.imagen
FROM platillo P 
INNER JOIN menu M ON P.id_menu = M.id_menu 
WHERE M.menu = 'Tipo de Menu' AND P.nombre LIKE 'Palabra a Buscar'%;

/*
* @description: Consulta que realiza una busqueda en todos los platillos existenes en la BD
*/
SELECT P.id_platillo, P.nombre, P.descripcion, P.precio, P.imagen 
FROM platillo P 
WHERE P.nombre LIKE 'Palabra a Buscar'%;

--------------------------------- FUNCIONES PARA EL CORRECTO FUNCIONAMIENTO DE LA APLICACION -----------------------------

/*
* @description: Funciona que realiza la insersion de un nuevo pedido y retorna el detalle del mismo
* @note: la funcion se llama desde la aplicacion como 'SELECT NuevoPedido(Parametros.....);'
*/
 
CREATE OR REPLACE FUNCTION NuevoPedido(xnombre character varying, 
									   xapellido character varying, 
									   xdireccion character varying, 
									   xtelefono character varying, 
									   xcorreo character varying, 
									   xnit character varying,
									   xtotal integer,
									   xfecha timestamp without time zone,
									   xpago integer,
									   xid integer[],
									   xcantidad integer[],
									   xsubtotal integer[]) 

RETURNS TABLE (num_pedido integer, nombre character varying(100), precio numeric, cantidad integer, subtotal numeric) AS $$
DECLARE
	IDUSER Cliente.id_cliente%TYPE;
	IDPEDIDO Pedido.id_pedido%TYPE;
	IDFACTURA Factura.id_factura%TYPE;
	
	Contador INTEGER := 1;
	Current_Id INTEGER;
	REG RECORD;
		
BEGIN
	INSERT INTO cliente(nombre, apellido, direccion, telefono, correo, nit)
	VALUES (xnombre, xapellido, xdireccion, xtelefono, xcorreo, xnit)
	RETURNING id_cliente INTO IDUSER;
	
	INSERT INTO pedido(fkid_cliente)
	VALUES (IDUSER)
	RETURNING id_pedido INTO IDPEDIDO;
	
	INSERT INTO Factura(total, fecha, fkid_tipopago)
	VALUES (xtotal, xfecha, xpago)
	RETURNING id_factura INTO IDFACTURA;
	
	FOREACH Current_Id IN ARRAY xid
	LOOP
		INSERT INTO detalle_platillo_pedido(cantidad, subtotal, fkid_factura, fkid_platillo, fkid_pedido)
		VALUES (xcantidad[Contador],xsubtotal[Contador],IDFACTURA,Current_Id,IDPEDIDO);
		Contador := Contador + 1;
	END LOOP;
	
	FOR reg IN SELECT p.id_pedido, pl.nombre, pl.precio, de.cantidad, de.subtotal
				FROM detalle_platillo_pedido de
				INNER JOIN platillo pl ON de.fkid_platillo = pl.id_platillo
				INNER JOIN pedido p ON de.fkid_pedido = p.id_pedido
				WHERE de.fkid_pedido = IDPEDIDO
	
	LOOP
		num_pedido := reg.id_pedido;
		nombre := reg.nombre;
		precio := reg.precio;
		cantidad := reg.cantidad;
		subtotal := reg.subtotal;
		RETURN NEXT;
	END LOOP;
END;
$$ LANGUAGE plpgsql;
