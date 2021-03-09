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

create table Tipo_Pago(
id_tipo_Pago serial,
Tipo_Pago varchar(50) not null,
Primary key(id_tipo_Pago)
);


create table Cliente(
id_cliente serial,
Nombre varchar(100) not null,
Apellido varchar(100) not null,
Telefono varchar(10) not null,
Correo   varchar(150) not null,
Direccion varchar(150) not null,
Nit varchar(15) not null,
Primary key(id_cliente)
);

create table Empleado(
	id_Empleado serial,
	Nombre varchar(100) not null,
	Apellido varchar(100) not null,
	Telefono varchar(10) not null,
	Correo varchar(150) not null,
	DPI varchar(20) not null,
	Genero varchar(10) not null,
	Tipo_Empleado varchar(50) not null,
	Primary key(id_Empleado)
);

create table Factura(
id_Factura serial,
total int not null,
Fecha date not null,
FKid_Cliente int not null,
FKid_Empleado int not null,
Estado_Pedido varchar(100) not null,
tipo_pago varchar(50) not null,
constraint FK_Cliente foreign key(FKid_Cliente) references Cliente(id_cliente) on delete cascade,
constraint FK_Empleado foreign key(FKid_Empleado) references Empleado(id_Empleado) on delete cascade,
Primary key(id_Factura)
);

create table Pedido(
id_Pedido serial,
FKid_Cliente int not null,
constraint FK_Cliente foreign key(FKid_Cliente) references Cliente(id_cliente) on delete cascade,
Primary key(id_Pedido)
);


create table Detalle_Platillo_Pedido(
id_DPlatillo serial,
Cantidad int not null,
Subtotal decimal not null,
FKid_Factura int not null,
FKid_Platillo int not null,
constraint FK_Platillo foreign key(FKid_Platillo) references Platillo(id_Platillo) on delete cascade,
constraint FK_FACTURA foreign key(FKid_Factura) references Factura(id_Factura) on delete cascade,
FKid_Pedido int not null,
constraint FK_Menu foreign key(FKid_Factura) references Factura(id_Factura) on delete cascade,
Primary key(id_DPlatillo)
);

--drop table Det_Pro_Pla;
--drop table Producto;
--drop table Platillo;
--drop table Menu;
--drop table Tipo_producto;

