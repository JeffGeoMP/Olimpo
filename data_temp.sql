insert into menu (menu) values ('Especial dia Lunes');
insert into menu (menu) values ('Especial dia Martes');
insert into menu (menu) values ('Especial dia Miercoles');
insert into menu (menu) values ('Especial dia Jueves');
insert into menu (menu) values ('Especial dia Viernes');
insert into menu (menu) values ('Especial dia Sabado');
insert into menu (menu) values ('Especial dia Domingo');
insert into menu (menu) values ('Menu 1');
insert into menu (menu) values ('Menu 2');
insert into menu (menu) values ('Tipico');
insert into menu (menu) values ('Tradicional');
insert into menu (menu) values ('Desayuno');
insert into menu (menu) values ('Postre');

insert into tipo_platillo (TipoPlatillo) values ('Desayuno');
insert into tipo_platillo (TipoPlatillo) values ('Almuerzo');
insert into tipo_platillo (TipoPlatillo) values ('Infantil');
insert into tipo_platillo (TipoPlatillo) values ('Refaccion');

insert into tipo_producto (tipo_producto) values ('Bebida');
insert into tipo_producto (tipo_producto) values ('Ingrediente');
insert into tipo_producto (tipo_producto) values ('Vegetales');
insert into tipo_producto (tipo_producto) values ('Carnes');

insert into producto (id_producto, nproducto, precio_u, id_tipproducto, descripcion)
values (1,'Gaseosa', 5.00, 1, 'Bebida gaseosa enlatada, Coca Cola o Pepsi');
insert into producto (id_producto, nproducto, precio_u, id_tipproducto, descripcion)
values (2,'Huevo', 1.00, 2, 'huevo de gallina');
insert into producto (id_producto, nproducto, precio_u, id_tipproducto, descripcion)
values (3,'Frijol', 1.00, 2, '');
insert into producto (id_producto, nproducto, precio_u, id_tipproducto, descripcion)
values (4,'Jugo de natural', 1.00, 1, 'Bebida natural');
insert into producto (id_producto, nproducto, precio_u, id_tipproducto, descripcion)
values (5,'Especies', 5.00, 2,'Ingrediente para el platillo');
insert into producto (id_producto, nproducto, precio_u, id_tipproducto, descripcion)
values (6,'Varios', 5.00, 2, 'Ingrediente para el platillo');
insert into producto (id_producto, nproducto, precio_u, id_tipproducto, descripcion)
values (7,'Verduras', 10.00, 3, 'Ingrediente para el platillo');
insert into producto (id_producto, nproducto, precio_u, id_tipproducto, descripcion)
values (8,'Queso', 5.00, 2, 'Acompañamiento para el desayuno');
insert into producto (id_producto, nproducto, precio_u, id_tipproducto, descripcion)
values (9,'Platanos', 1.00, 2, 'Acompañamiento para el desayuno');
insert into producto (id_producto, nproducto, precio_u, id_tipproducto, descripcion)
values (10,'Pollo', 1.00, 4,'Ingrediente para el platillo');
insert into producto (id_producto, nproducto, precio_u, id_tipproducto, descripcion)
values (11,'Carne de Res', 1.00, 1, 'Ingrediente para el platillo');
insert into producto (id_producto, nproducto, precio_u, id_tipproducto, descripcion)
values (12,'Frutas', 1.00, 1, 'Frutas varias');

insert into platillo (nombre, precio, descripcion, id_tipop, id_Menu)
values ('Tipico',30.00,'Frijoles volteados, huevo al gusto, jugo de naranja o cafe',1,10);
insert into platillo (nombre, precio, descripcion, id_tipop, id_Menu)
values ('Panqueque',25.00,'Acompañado con jugo de naranja o cafe', 1, 12);
insert into platillo (nombre, precio, descripcion, id_tipop, id_Menu)
values ('Caldo de Res',40.00,'Bebida natural o gaseosa, un acompañamiento',2, 1);
insert into platillo (nombre, precio, descripcion, id_tipop, id_Menu)
values ('Pepian',40.00,'Bebida natural o gaseosa, un acompañamiento',2, 10);
insert into platillo (nombre, precio, descripcion, id_tipop, id_Menu)
values ('Jocon',30.00,'Bebida natural o gaseosa, un acompañamiento',2, 4);
insert into platillo (nombre, precio, descripcion, id_tipop, id_Menu)
values ('Helado natural',10.00,'Helado de fruta 100% natural',4, 13);
insert into platillo (nombre, precio, descripcion, id_tipop, id_Menu)
values ('Licuado',15.00,'De fruta o a eleccion',4, 13);

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