insert into menu (menu) values ('Desayuno');
insert into menu (menu) values ('Almuerzo');
insert into menu (menu) values ('Refaccion');
insert into menu (menu) values ('del dia');
insert into menu (menu) values ('Infantil');
insert into menu (menu) values ('Postres');
insert into menu (menu) values ('Bebidas');
insert into menu (menu) values ('Extras');


insert into tipo_producto (tipo_producto) values ('Bebida');
insert into tipo_producto (tipo_producto) values ('Ingrediente');
insert into tipo_producto (tipo_producto) values ('Vegetales');
insert into tipo_producto (tipo_producto) values ('Carnes');

insert into producto (nproducto, precio_u, id_tipproducto, descripcion)
values ('Gaseosa', 5.00, 1, 'Bebida gaseosa enlatada, Coca Cola o Pepsi');
insert into producto (nproducto, precio_u, id_tipproducto, descripcion)
values ('Huevo', 1.00, 2, 'huevo de gallina');
insert into producto (nproducto, precio_u, id_tipproducto, descripcion)
values ('Frijol', 1.00, 2, '');
insert into producto (nproducto, precio_u, id_tipproducto, descripcion)
values ('Jugo de natural', 1.00, 1, 'Bebida natural');
insert into producto (nproducto, precio_u, id_tipproducto, descripcion)
values ('Especies', 5.00, 2,'Ingrediente para el platillo');
insert into producto (nproducto, precio_u, id_tipproducto, descripcion)
values ('Varios', 5.00, 2, 'Ingrediente para el platillo');
insert into producto (nproducto, precio_u, id_tipproducto, descripcion)
values ('Verduras', 10.00, 3, 'Ingrediente para el platillo');
insert into producto (nproducto, precio_u, id_tipproducto, descripcion)
values ('Queso', 5.00, 2, 'Acompañamiento para el desayuno');
insert into producto (nproducto, precio_u, id_tipproducto, descripcion)
values ('Platanos', 1.00, 2, 'Acompañamiento para el desayuno');
insert into producto (nproducto, precio_u, id_tipproducto, descripcion)
values ('Pollo', 1.00, 4,'Ingrediente para el platillo');
insert into producto (nproducto, precio_u, id_tipproducto, descripcion)
values ('Carne de Res', 1.00, 1, 'Ingrediente para el platillo');
insert into producto (nproducto, precio_u, id_tipproducto, descripcion)
values ('Frutas', 1.00, 1, 'Frutas varias');

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Tipico',30.00,'Frijoles volteados, huevo al gusto, jugo de naranja o cafe',1,"assets/menus/Desayuno_tipico.jpg");
insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Panqueque',25.00,'Acompañado con jugo de naranja o cafe', 1,"assets/menus/panqueque.jpg");
insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Caldo de Res',40.00,'Bebida natural o gaseosa, un acompañamiento', 2,"assets/menus/");
insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Pepian',40.00,'Bebida natural o gaseosa, un acompañamiento', 2,"assets/menus/Caldo_red.jpg");
insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Jocon',30.00,'Bebida natural o gaseosa, un acompañamiento', 2,"assets/menus/jocon.jpg");
insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Helado natural',10.00,'Helado de fruta 100% natural', 6,"assets/menus/helado_natural.png");
insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Licuado',15.00,'De fruta o a eleccion', 7,"assets/menus/licuado_frutas.jpg");



-- -------------------------------------------------------------------------------------------
insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Hamburguesa Infantil',25.00,'Jugo de naranja, papas fritas',5,"assets/menus/Hamburguesa_infantil.jpg");

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Deditos de pollo',25.00,'Jugo de naranja, papas fritas',5,"assets/menus/deditos_pollo.jpg");

--Postres

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Torrejas',10.00,'',6,"assets/menus/torrejas.jpg");

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Pie de Eleto',10.00,'',6,"assets/menus/pie_elote.jpg");

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Rellenitos',8.00,'',6,"assets/menus/rellenitos.jpg");

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Pastel de zanahoria',15.00,'',7,"assets/menus/pastel_zanahoria.jpg");

--Bebidas

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Coca-Cola',5.00,'',7,"assets/menus/coca-cola.jpg");

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Limonada con soda',5.00,'',7,"assets/menus/limonada_soda.jpg");

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Horchata',5.00,'',7,"assets/menus/horchata.jpg");

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Cerveza Gallo',15.00,'',7,"assets/menus/gallo_cerveza.jpg");

--Extras
insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Papas fritas',15.00,' con salsa dulce o mayonesa ',8,"assets/menus/papas_fritas.jpg");

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Frijoles con nachos',15.00,'Guacamole, queso o crema',8,"assets/menus/nachos.jpg");

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Ensalada',10.00,'aderezo a eleccion',8,"assets/menus/ensalada.jpg");

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Sopas',10.00,'',8,"assets/menus/sopa.jpg");





insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('platon de frutas',35.00,'De fruta o a eleccion', 1,"assets/menus/platondefrutas.jpg");

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('omelette chapin',55.00,'con jamon, champiñones y queso', 1,"assets/menus/omeletechapin.jpg");

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('avena',15.00,'con leche entera', 1,"assets/menus/avena.jpg");

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('huevos Rancheros',45.00,'Huevos estrellados acompañado de platanos, frijol, crema y salsa', 1,"assets/menus/huevosrancheros.jpg");


insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Caldo de gallina',80.00,'acompañado de elote , arroz y aguacate', 2,"assets/menus/caldodegallina.jpg");


insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Pasta alfredo',45.00,'pasta alfredo bañado con salsa blanca', 2,"assets/menus/licuado_frutas.jpg");


insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('azado',80.00,'acompañado de longaniza,guacamol, frijol y salsa ', 2,"assets/menus/pastalafredo.jpg");


insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('pollo frito',50.00,'con papas fritas', 2,"assets/menus/pollofrito.jpg");


insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Hamburgueza',45.00,'con champiñones y tozino,acompañada de papas fritas', 3,"assets/menus/Hamburgeza.jpg");

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('pizza',75.00,'jamon o peperoni', 3,"assets/menus/pizza.jpg");


insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('croassant',25.00,'de jamon y queso', 3,"assets/menus/croassant.jpg");


insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('pan chapata con jamon',30.00,'Acompañado de papas fritas', 3,"assets/menus/chapataconjamon.jpg");

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('Estofado de 3 carnes',65.00,'carne de res, de cerdo y de gallina acompañado de arroz', 4,"assets/menus/estofado.jpg");

insert into platillo (nombre, precio, descripcion, id_Menu,Imagen)
values ('mini pizza',20.00,'de jamon y queso', 5,"assets/menus/minipizza.jpg");

insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(1,2);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(1,3);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(1,4);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(2,6);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(2,4);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(3,11);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(3,5);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(3,7);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(3,4);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(4,11);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(4,5);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(4,7);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(4,4);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(5,11);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(5,5);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(5,7);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(5,4);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(6,12);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(7,12);

insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(8,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(9,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(10,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(11,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(12,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(13,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(14,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(15,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(16,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(17,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(18,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(19,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(20,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(21,1);

insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(22,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(23,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(24,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(25,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(26,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(27,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(28,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(29,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(30,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(31,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(32,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(33,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(34,1);
insert into det_pro_pla(fk_id_platillo,fk_id_producto) values(35,1);



