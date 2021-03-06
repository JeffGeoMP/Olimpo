

class Funciones{
    constructor(){ }

    ValidarPago(FormaPagoTarjeta){
        if(FormaPagoTarjeta == false){
            return 1;
        }else{
            return 2;
        }
    }


}


module.exports = {Funciones}