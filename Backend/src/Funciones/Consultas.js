const format = require('simple.string.format');

class Consultas{
    constructor(){ }

    PlatillosPorMenu(Tipo_Menu){
        return 'SELECT P.id_platillo, P.nombre, P.precio, P.descripcion, P.imagen ' +
                'FROM platillo P  ' +
                'INNER JOIN menu M ON P.id_menu = M.id_menu  WHERE M.menu = \'{0}\''.format(Tipo_Menu);
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

    NuevoPedido(Nombre, Apellido, Nit, Telefono, Correo, Total, Productos, Direccion){
        let Values = "";
        for (let index = 0; index < Productos.length; index++) {
            const element = Productos[index];
            if (index == Productos.length - 1) {
                Values += '({0},{1},IDFACTURA,{2},IDPEDIDO);\n'.format(element.Cantidad, element.Subtotal, element.Id); 
            }else{
                Values += '({0},{1},IDFACTURA,{2},IDPEDIDO),\n'.format(element.Cantidad, element.Subtotal, element.Id); 
            }
        }

        let CurrentDate = new Date();
        let Fecha = '{0}/{1}/{2} {3}:{4}:{5}'.format(CurrentDate.getDate(),CurrentDate.getMonth(),CurrentDate.getFullYear(), CurrentDate.getHours(), CurrentDate.getMinutes(), CurrentDate.getSeconds());
        
        return 'BEGIN; \n' +
                'DO $$ \n' +
                'DECLARE IDUSER Cliente.id_cliente%TYPE; \n' +
                'DECLARE IDPEDIDO Pedido.id_pedido%TYPE; \n' +
                'DECLARE IDFACTURA Factura.id_factura%TYPE; \n' +
                'BEGIN \n'+
                'INSERT INTO cliente(nombre, apellido, telefono, correo, nit, direccion) \n' +
                'VALUES (\'{0}\',\'{1}\',\'{2}\',\'{3}\',\'{4}\',\'{5}\') \n'.format(Nombre, Apellido, Telefono, Correo, Nit, Direccion) +
                'RETURNING id_cliente INTO IDUSER; \n' + 
                'INSERT INTO pedido(fkid_cliente) \n' +
                'VALUES (IDUSER) \n' +
                'RETURNING id_pedido INTO IDPEDIDO; \n' +
                'INSERT INTO Factura(total, fecha, fkid_tipopago) \n' +
                'VALUES ({0},\'{1}\',{2}) \n'.format(Total, Fecha, 2) + 
                'RETURNING id_factura INTO IDFACTURA; \n' + 
                'INSERT INTO detalle_platillo_pedido(cantidad, subtotal, fkid_factura, fkid_platillo, fkid_pedido) \n'+
                'VALUES {0} '.format(Values) +
                'END $$; \n' + 
                'COMMIT; ';       
    }
}

module.exports = {Consultas}