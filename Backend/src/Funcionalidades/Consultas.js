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

    ActualizarPedido(Id_Factura, Estado){
        return 'SELECT ActualizarEstadoFactura({0},{1})'.format(Id_Factura, Estado);
    }

    NuevoPlatillo(Nombre, Precio, Descripcion, Id_Menu, Imagen){
        return 'SELECT NuevoPlatillo(\'{0}\',{1},\'{2}\',{3},\'{4}\')'.format(Nombre, Precio, Descripcion, Id_Menu, Imagen);
    }

    ActualizarPlatillo(Id_Platillo, Nombre, Precio, Descripcion, Imagen){
        return 'SELECT ActualizarPlatillo({0},\'{1}\',{2}, \'{3}\',\'{4}\')'.format(Id_Platillo, Nombre, Precio, Descripcion, Imagen);
    }

    EliminarPlatillo(Id_Platillo){
        return 'SELECT EliminarPlatillo({0})'.format(Id_Platillo);
    }

    NuevoEmpleado(Nombre, Apellido, Telefono, Correo, Password, Direccion, Tipo_Persona){
        return 'SELECT NuevoEmpleado(\'{0}\',\'{1}\',\'{2}\',\'{3}\',\'{4}\',\'{5}\',{6})'.format(Nombre, Apellido, Telefono, Correo, Password, Direccion, Tipo_Persona);
    }

    ActualizarEmpleado(Id_Empleado, Nombre, Apellido, Telefono, Correo, Password, Direccion, Tipo_Persona){
        return 'SELECT ActualizarEmpleado({0},\'{1}\',\'{2}\',\'{3}\',\'{4}\',\'{5}\',\'{6}\',{7})'.format(Id_Empleado, Nombre, Apellido, Telefono, Correo, Password, Direccion, Tipo_Persona);
    }

    EliminarEmpleado(Id_Empleado){
        return 'SELECT EliminarEmpleado({0})'.format(Id_Empleado);
    }

    ObtenerInformacion(Id_Persona){
        return 'SELECT * FROM Persona Where id_persona = {0}'.format(Id_Persona);
    }

    menuDelDia_(){
        return 'select P.id_platillo, P.nombre, P.precio, P.descripcion, P.imagen ' +
                'from menu M, platillo P ' +
                'where M.id_Menu = P.id_Menu ' +
                'and lower(M.menu) = \'del dia\' ';
    }
}

module.exports = {Consultas}