
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