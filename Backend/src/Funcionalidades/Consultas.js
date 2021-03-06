const format = require('simple.string.format');
const { Funciones }= require('../Funcionalidades/Funciones');


const Funcion = new Funciones();

class Consultas{
    constructor(){ }

    PlatillosPorMenu(Tipo_Menu){
        return 'SELECT P.id_platillo, P.nombre, P.precio, P.descripcion, P.imagen ' +
                'FROM platillo P  ' +
                'INNER JOIN menu M ON P.id_menu = M.id_menu  WHERE LOWER(M.menu) = \'{0}\''.format(Tipo_Menu);
    }

    Platillos(){
        return 'SELECT P.id_platillo, P.nombre, P.precio, P.descripcion, P.imagen ' +
                'FROM platillo P'
    }

    BusquedaPorMenu(Tipo_Menu, Palabra){
        return 'SELECT P.id_platillo, P.nombre, P.descripcion, P.precio, P.imagen ' +
                'FROM platillo P ' +
                'INNER JOIN menu M ON P.id_menu = M.id_menu ' +
                'WHERE M.menu = \'{0}\' AND P.nombre LIKE \'{1}%\''.format(Tipo_Menu, Palabra);
    }

    BusquedaGeneral(Palabra){
        return 'SELECT P.id_platillo, P.nombre, P.descripcion, P.precio, P.imagen ' +
                'FROM platillo P ' +
                'WHERE P.nombre LIKE \'{0}%\''.format(Palabra);
    }

    NuevoPedido(Nombre, Apellido, Direccion, Telefono, Correo, Nit, Total, Tarjeta, Productos){
        let FormaPago = Funcion.ValidarPago(Tarjeta);
        let ArraysPostgresql = Funcion.SepararCampos(Productos);

        let CurrentDate = new Date();
        let Fecha = '{0}/{1}/{2} {3}:{4}:{5}'.format(CurrentDate.getDate(),CurrentDate.getMonth(),CurrentDate.getFullYear(), CurrentDate.getHours(), CurrentDate.getMinutes(), CurrentDate.getSeconds());

        return 'SELECT NuevoPedido(\'{0}\',\'{1}\',\'{2}\',\'{3}\','.format(Nombre, Apellido, Direccion, Telefono)  +
                '\'{0}\',\'{1}\',{2},\'{3}\',{4},'.format(Correo, Nit, Total, Fecha, FormaPago) +
                '\'{0}\',\'{1}\',\'{2}\');'.format(ArraysPostgresql[0],ArraysPostgresql[1],ArraysPostgresql[2]);
    }

    menuDelDia_(){
        return 'select P.id_platillo, P.nombre, P.precio, P.descripcion, P.imagen ' +
                'from menu M, platillo P ' +
                'where M.id_Menu = P.id_Menu ' +
                'and lower(M.menu) = \'del dia\' ';
    }
}

module.exports = {Consultas}