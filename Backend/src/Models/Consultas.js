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
                'WHERE P.nombre LIKE \'' + Palabra + '%\''
    }
}

module.exports = {Consultas}