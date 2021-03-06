const nodemailer = require('nodemailer');


class EnviarInformacion{
    
    constructor(){    
        this.Tranporte = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'cresogt@gmail.com',
                pass: 'Guatemala302016'
            }
        });
    }

    EnviarFactura(Correo, Mensaje){
        const Opciones = {
            from: 'Remitente',
            to: Correo,
            subject: 'Pedido Recibido Exitosamente',
            html: Mensaje
        }

        this.Tranporte.sendMail(Opciones, (error, info)=>{
            if(error){
                console.log(error);
                return false;
            }else{
                return true;
            }
        });
    }
}

module.exports = {EnviarInformacion};