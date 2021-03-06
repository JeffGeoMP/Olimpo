-- consulta de menus
select P.nombre, P.descripcion, P.precio
from menu M, platillo P
where M.id_Menu = P.id_Menu
and lower(M.menu) = 'Almuerzo';

-- Consulta buscador
select P.nombre, P.descripcion, P.precio
from menu M, platillo P
where M.id_Menu = P.id_Menu
and lower(M.menu) = 'almuerzo' and lower(P.Nombre) Like 'P_%';

-- Consulta Menu del dia
select P.nombre, P.descripcion, P.precio
from menu M, platillo P
where M.id_Menu = P.id_Menu
and lower(M.menu) = 'del dia';



--*********************** Funciones para el correcto funcionamiento de la aplicacion *****************************

CREATE OR REPLACE FUNCTION InsertSimple(xnombre character varying, 
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
	INSERT INTO cliente(nombre, apellido, telefono, correo, nit)
	VALUES (xnombre, xapellido, xtelefono, xcorreo, xnit)
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
