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

RETURNS TABLE (num_Factura integer, nombre character varying(100), precio numeric, cantidad integer, subtotal numeric) AS $$
DECLARE
	IDUSER Persona.id_persona%TYPE;
	IDFACTURA Factura.id_factura%TYPE;
	
	Contador INTEGER := 1;
	Current_Id INTEGER;
	REG RECORD;
		
BEGIN
	INSERT INTO Persona(nombre, apellido, direccion, telefono, correo,Tipo_Persona)
	VALUES (xnombre, xapellido, xdireccion, xtelefono, xcorreo,3)
	RETURNING id_persona INTO IDUSER;
	
	
	
	INSERT INTO Factura(total, fecha,tipo_pago,Nit,Estado_Pedido,FKid_Persona)
	VALUES (xtotal, xfecha, xpago,xnit,1,IDUSER)
	RETURNING id_factura INTO IDFACTURA;
	
	FOREACH Current_Id IN ARRAY xid
	LOOP
		INSERT INTO detalle_platillo_pedido(cantidad, subtotal, fkid_factura, fkid_platillo)
		VALUES (xcantidad[Contador],xsubtotal[Contador],IDFACTURA,Current_Id);
		Contador := Contador + 1;
	END LOOP;
	
	FOR reg IN SELECT p.id_factura, pl.nombre, pl.precio, de.cantidad, de.subtotal
				FROM detalle_platillo_pedido de
				INNER JOIN platillo pl ON de.fkid_platillo = pl.id_platillo
				INNER JOIN Factura p ON de.fkid_factura = p.id_factura
				WHERE de.fkid_factura = IDFACTURA
	
	LOOP
		num_Factura := reg.id_factura;
		nombre := reg.nombre;
		precio := reg.precio;
		cantidad := reg.cantidad;
		subtotal := reg.subtotal;
		RETURN NEXT;
	END LOOP;
END;
$$ LANGUAGE plpgsql;


------------------------------------------------------------------------------------ 3ER SPRINT

-----------Actualizacion de estado de una factura con devolucion del correo del cliente------------

CREATE OR REPLACE FUNCTION ActualizarEstadoFactura(xid_Factura integer,Nuevo_Estado integer) 
RETURNS TABLE( xCorreo character varying(150)) AS 
$$
DECLARE
REG RECORD;
BEGIN
	UPDATE Factura set Estado_Pedido=Nuevo_Estado
    where id_Factura=xid_Factura;

	FOR reg IN SELECT pe.correo
				FROM Factura Fa
				INNER JOIN Persona pe ON Fa.FKid_Persona = pe.id_persona
				where Fa.id_Factura=xid_Factura
	
	LOOP
		xCorreo := reg.correo;
		Return next;
	END LOOP;
	
END;
$$ LANGUAGE plpgsql;

---------- Insert de nuevos platillos ----------



CREATE OR REPLACE FUNCTION NuevoPlatillo(xnombre varchar(50), xprecio decimal, xdescripcion varchar(150), xid_Menu integer,xImagen varchar(100))
RETURNS integer AS $$
BEGIN
insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values (xnombre, xprecio, xdescripcion, xid_Menu,xImagen);
RETURN 1;
END;
$$ LANGUAGE plpgsql;


--Actualizacion de los datos de un platillo

CREATE OR REPLACE FUNCTION ActualizarPlatillo(xid_platillo integer,
												Nuevo_Nombre varchar(50),
												Nuevo_Precio decimal,
												Nueva_Descripcion varchar(150),
												Nueva_Imagen varchar(100)) 
RETURNS integer AS 
$$
BEGIN
	UPDATE Platillo set Nombre=Nuevo_Nombre, Precio=Nuevo_Precio,Descripcion=Nueva_Descripcion,Imagen=Nueva_Imagen
    where id_platillo=xid_platillo;
	
	RETURN 1;
	
END;
$$ LANGUAGE plpgsql;

------Eliminacion de un platillo existente

CREATE OR REPLACE FUNCTION EliminarPlatillo(xid_platillo integer) 
RETURNS integer AS 
$$
BEGIN
	delete FROM Platillo 
	where id_platillo=xid_platillo;
	RETURN 1;
	
END;
$$ LANGUAGE plpgsql;

---------CREAR UN EMPLEADO
CREATE OR REPLACE FUNCTION NuevoEmpleado(xnombre varchar(100), 
										xapellido varchar(100),
										xtelefono varchar(10),
										xcorreo varchar(150),
										contraseña varchar(50),
										xdireccion varchar(150),
										xtipo_persona integer)
RETURNS integer AS $$
BEGIN
insert into Persona (Nombre, Apellido, Telefono,Correo,contraseña,Direccion,Tipo_Persona)
values (xnombre, xapellido ,xtelefono,xcorreo,contraseña,xdireccion,xtipo_persona);
RETURN 1;
END;
$$ LANGUAGE plpgsql;




----Actualizar Empleado
CREATE OR REPLACE FUNCTION ActualizarEmpleado(xid_persona integer,
										xnombre varchar(100), 
										xapellido varchar(100),
										xtelefono varchar(10),
										xcorreo varchar(150),
										xcontraseña varchar(50),
										xdireccion varchar(150),
										xtipo_persona integer) 
RETURNS TABLE(NombreA varchar(100),ApellidoA varchar(100),TelefonoA varchar(10),CorreoA varchar(150),DireccionA varchar(150)) AS 
$$
DECLARE
REG RECORD;
BEGIN
	UPDATE Persona set Nombre=xnombre,Apellido=xapellido,
						Telefono=xtelefono,Correo=xcorreo,
						contraseña=xcontraseña,
						Direccion=xdireccion,
						Tipo_Persona=xtipo_persona
    where id_persona=xid_persona;

	FOR reg IN SELECT pe.Nombre,pe.Apellido,pe.Telefono,pe.Correo,pe.contraseña,pe.Direccion,pe.Tipo_Persona
				FROM Persona pe
				where pe.id_persona=xid_persona
	
	LOOP
		NombreA := reg.Nombre;
		ApellidoA:= reg.Apellido;
		TelefonoA:=reg.Telefono;
		CorreoA:= reg.Correo;
		DireccionA:= reg.Direccion;
		Return next;
	END LOOP;
	
END;
$$ LANGUAGE plpgsql;

----Eliminar Empleado
CREATE OR REPLACE FUNCTION EliminarEmpleado(xid_Empleado integer) 
RETURNS integer AS 
$$
BEGIN
	delete FROM Persona 
	where id_persona=xid_Empleado;
	RETURN 1;
	
END;
$$ LANGUAGE plpgsql;

/**
*@description Funcion para Añadir una Valoracion a un platillo
*
*/ 
CREATE OR REPLACE FUNCTION NuevaValoracion(xidplatillo integer, 
										  xpunteo integer, 
										  xdescripcion varchar(100))
										  
RETURNS INTEGER AS $$
DECLARE
	Status Valoracion.id_valoracion%Type;						   
BEGIN 
	INSERT INTO Valoracion(punteo, descripcion, fkid_platillo)
	VALUES (xpunteo, xdescripcion, xidplatillo)
	RETURNING id_valoracion INTO Status;	
	
	IF Status <> 0 THEN
  	RETURN(1);
	else
  	Return(0);
	END if;
END;
$$ LANGUAGE plpgsql;										  
