create table Tipo_Producto(
id_tipo_Producto serial,
Tipo_Producto varchar(50) not null,
	Primary key(id_tipo_Producto)
);


create table Menu(
id_Menu serial,
Menu varchar(50) not null,
Primary key(id_Menu)
);

create table Platillo(
id_Platillo serial,
Nombre varchar(50) not null,
Precio decimal not null,
Descripcion varchar(150) not null,
Imagen varchar(100),
id_Menu int not null,
constraint FK_Menu foreign key(id_Menu) references Menu(id_Menu) on delete cascade,
Primary key(id_Platillo)
);

create table Producto(
id_producto serial,
NProducto varchar(50) not null,
Precio_U  decimal not null,	
id_TipProducto int not null,
Descripcion varchar(150),
constraint FK_TipProducto foreign key(id_TipProducto) references Tipo_Producto(id_tipo_Producto) on delete cascade,
Primary key(id_producto)
);

create table Det_Pro_Pla(
id_DetalleReceta serial,
FK_Id_platillo int not null,
FK_Id_producto int not null,
constraint FK_TiProducto foreign key(FK_Id_producto) references Producto(id_producto) on delete cascade,
constraint FK_TiPlatillo foreign key(FK_Id_platillo) references Platillo(id_platillo) on delete cascade,
Primary key(id_DetalleReceta)
);


create table Persona(
id_persona serial,
Nombre varchar(100) not null,
Apellido varchar(100) not null,
Telefono varchar(10) not null,
Correo   varchar(150) not null,
contraseña varchar(50),
Direccion varchar(150) not null,
Tipo_Persona int not null,
Primary key(id_persona)
);


create table Factura(
id_Factura serial,
total int not null,
Fecha date not null,
FKid_Persona int not null,
Estado_Pedido int not null,
tipo_pago int not null,
Nit varchar(15),
constraint FK_Persona foreign key(FKid_Persona) references Persona(id_persona) on delete cascade,
Primary key(id_Factura)
);


create table Detalle_Platillo_Pedido(
id_DPlatillo serial,
Cantidad int not null,
Subtotal decimal not null,
FKid_Factura int not null,
FKid_Platillo int not null,
constraint FK_Platillo foreign key(FKid_Platillo) references Platillo(id_Platillo) on delete cascade,
constraint FK_FACTURA foreign key(FKid_Factura) references Factura(id_Factura) on delete cascade,
Primary key(id_DPlatillo)
);

create table Valoracion(
id_valoracion serial,
punteo int not null,
Descripcion varchar(200),
FKid_Platillo int not null,
constraint FK_valPlat foreign key(FKid_Platillo) references Platillo(id_Platillo) on delete cascade,
Primary key(id_valoracion)
);

--drop table Det_Pro_Pla;
--drop table Producto;
--drop table Platillo;
--drop table Menu;
--drop table Tipo_producto;

