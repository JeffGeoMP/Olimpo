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

