class Consultas{
    constructor(){
        console.log('Consola Corriendo...')
    }

    PlatillosPorMenu(Tipo_Menu){
        return 'SELECT P.id_platillo, P.nombre, P.precio, P.descripcion, P.imagen ' +
                'FROM platillo P  ' +
                'INNER JOIN menu M ON P.id_menu = M.id_menu  WHERE M.menu = \''+Tipo_Menu+'\''
    }

    Platillos(){
        return 'SELECT P.id_platillo, P.nombre, P.precio, P.descripcion, P.imagen ' +
                'FROM platillo P'
    }

    BusquedaPorMenu(Tipo_Menu, Palabra){
        return 'SELECT P.id_platillo, P.nombre, P.descripcion, P.precio, P.imagen ' +
                'FROM platillo P ' +
                'INNER JOIN menu M ON P.id_menu = M.id_menu ' +
                'WHERE M.menu = \'' + Tipo_Menu + '\' AND P.nombre LIKE \'' + Palabra + '%\''
    }

    BusquedaGeneral(Palabra){
        return 'SELECT P.id_platillo, P.nombre, P.descripcion, P.precio, P.imagen ' +
                'FROM platillo P ' +
                'WHERE LOWER(P.nombre) LIKE \'' + Palabra + '%\''
    }

    menuDelDia_(){
        return 'select P.id_platillo, P.nombre, P.precio, P.descripcion, P.imagen ' +
                'from menu M, platillo P ' +
                'where M.id_Menu = P.id_Menu ' +
                'and lower(M.menu) = \'del dia\' '
    }
}

module.exports = {Consultas}