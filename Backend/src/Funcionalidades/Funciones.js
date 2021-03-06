const format = require('simple.string.format');

class Funciones{
    constructor(){ }

    ValidarPago(FormaPagoTarjeta){
        if(FormaPagoTarjeta == false){
            return 1;
        }else{
            return 2;
        }
    }

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

}

module.exports = {Funciones}