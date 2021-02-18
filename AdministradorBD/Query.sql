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