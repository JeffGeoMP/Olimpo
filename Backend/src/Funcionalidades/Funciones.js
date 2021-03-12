const format = require('simple.string.format');

class Funciones{
    constructor(){ }


    /**
     * @description Funcion que devuelve el Id de la forma de pago
     * @param {*} FormaPagoTarjeta 
     * @returns 
     */
    ValidarPago(FormaPagoTarjeta){
        if(FormaPagoTarjeta == false){
            return 1;
        }else{
            return 2;
        }
    }

    /**
     * @description Parsea a String el Tipo de Pago
     * @param {*} FormaPagoTarjeta 
     * @returns 
     */
    TipoPago(FormaPagoTarjeta){
        if(FormaPagoTarjeta == false){
            return 'Efectivo - Pago Contra Entrega';
        }else{
            return 'Tarjeta de Debito';
        }
    }

    /**
     * @description funcion que devuelve los array en notacion de arrayas para postgresql
     * @param {*} Productos 
     * @returns 
     */
    SepararCampos(Productos){
        let Id = '{';
        let Cantidad = '{';
        let Subtotal = '{';

        for (let index = 0; index < Productos.length; index++) {
            const element = Productos[index];
            if (index == Productos.length - 1) {
                Id += element.Id + '}';
                Cantidad += element.Cantidad + '}';
                Subtotal += element.Subtotal + '}';
            }else{
                Id += element.Id + ',';
                Cantidad += element.Cantidad + ',';
                Subtotal += element.Subtotal + ',';
            }
        }
        let ArraysPostgresql = [Id, Cantidad, Subtotal];

        return ArraysPostgresql;
    }

    DetalleHTML (xnombre, xapellido, xtelefono, xdireccion, xtotal, xpago, xdetalle){
        let CodigoDetalle = '';
        let IDPedido = '';

        xdetalle.forEach(element => {
            let Current_Cadena = element.nuevopedido;
            Current_Cadena = Current_Cadena.substring(1, Current_Cadena.length-1);
            Current_Cadena = Current_Cadena.replace(/["]/g, '');

            let Campos = Current_Cadena.split(',');
            IDPedido = Campos[0];
            
            CodigoDetalle += '<tr style=\"font-family: cursive; font-weight: normal;\">\n' +
                                    '<td align=\"center\" style=\"border:solid\">{0}</td>\n'.format(Campos[3]) +
                                    '<td style=\"border:solid\">{0}</td>\n'.format(Campos[1]) +
                                    '<td align=\"center\" style=\"border:solid\">Q {0}</td>\n'.format(Campos[2]) +
                                    '<td align=\"center\" style=\"border:solid\">Q {0}</td>\n'.format(Campos[4]) +
                                '</tr>\n' ;

        });

        return	'<table style="border:black; border-collapse: collapse">' +
			'<tr align="left">' +
				'<th colspan="4">                  ' +
                    '<h1 style="font-family: cursive; font-weight: normal">' +
						'Gracias Por Tu Pedido: <br/>' +
						'{0} {1}'.format(xnombre, xapellido) +
					'</h1>' +
					'<h4 style="font-family: cursive; font-weight: normal">' +
						'Recibo de Parte de Olimpo Restaurant <br />' +
						'# de Orden: {0} <br />'.format(IDPedido) +
						'Metodo de Pago: {0} <br />'.format(this.TipoPago(xpago)) +
                        'Direccion de Envio: {0} <br />'.format(xdireccion) +
						'Telefono: {0} <br />'. format(xtelefono) +
					'</h4>' +
				'</th>' +
			'</tr>' +
			'<tr><td></td></tr>' +
			'<tr><td></td></tr>' +
            '<tr >' +
                '<th colspan="2" align="right">' +
                   '<h3 style="font-family: cursive; font-size:150%; color: #FF9800;">' +
                        'Total' +
                    '</h3> ' +
                '</th>' +
                '<th  colspan="2" >' +
                    '<h3 style="font-family: cursive; font-size:150%; color: #FF9800;">Q {0}</h3>'.format(xtotal) +
                '</th>' +
            '</tr>' +
            '<tr><td></td></tr>' +
			'<tr><td></td></tr>' +
            '<tr style="font-family: cursive; font-weight: normal; border: solid black">' +
                '<th style="border:solid" >Cantidad</th>' +
                '<th style="border:solid">Descripcion</th>' +
                '<th style="border:solid">Precio</th>' +
                '<th style="border:solid">Subtotal</th>' +
            '</tr>' +
            CodigoDetalle +
            '<tr><td></td></tr>' +
			'<tr><td></td></tr>' +
            '<tr>' +
                '<th colspan="4">' +
                    '<h2 style="font-family: cursive; font-size:75%; color: #1a2b8b; font-style: italic;">' +
                        '"Comida con la que te sentiras en el mismisimo olimpo"' +
                    '</h2>' +
                '</th>' +
            '</tr>' +
            '<tr><td></td></tr>' +
			'<tr><td></td></tr>' +
            '<tr>' +
                '<th colspan="4" align="center">' +
                    '<h2 style="font-family: sans-serif; font-size: 50%;">' +
                        'TODOS LOS DERECHOS RESERVADOS ©OLIMPO, 2021' +
                    '</h2>' +
                '</th>' +
            '</tr>' +
		'</table>' ;
    }

    ActualizarHTML(Id_Factura, Estado){
        return '<table style="border: black; border-collapse: collapse">' +
		'	<tr align="left">' +
		'		<th colspan="4">' +
		'			<h1 style="font-family: cursive; font-weight: normal">' +
		'				Actualizacion de Pedido:' +
		'			</h1>' +
		'			<h4 style="font-family: cursive; font-weight: normal">' +
		'				Tu pedido: #{0} <br>'.format(Id_Factura) +
        '                            Se encuentra: {0}'.format(this.ParserPedido(Estado)) +
		'			</h4>' +
		'		</th>' +
		'	</tr>' +
		'	' +
		'</table>'; 
    }

    /**
     * @description Funcion para parsear un estado en INT a su equivalente STRING
     * @param {*} Estado 
     */
    ParserPedido(Estado){
        switch (Estado) {
            case 1:
                return 'En Cola Para Ser Preparado';
            
            case 2:
                return 'En Preparacion';
        
            case 3:
                return 'En Camino a tu Casa';

            default:
                return 'Cancelado';
        }
    }

    ParserPersona(Tipo_Persona){
        switch (Tipo_Persona) {
            case 1:
            return 'Administrador';
            
            case 2:
                return 'Empleado';

            case 3:
            return 'Cliente';

            default:
                return 'Verificar Usuario';
        }
    }

}

module.exports = {Funciones}