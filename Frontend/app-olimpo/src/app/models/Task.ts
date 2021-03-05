export interface Task{
    nombre: string;
    descripcion:string;
    Precio:String;
    Subtotal:String;
    Cantidad:string;

}

export interface Cliente{
    Nombre: string;
    Apellido:string;
    Nit:string;
    Telefono:string
    Correo:string;
    Direccion:string;
}


export interface Factura{
    Nombre: string;
    Apellido:string;
    Nit:string;
    Telefono:string;
    Correo:string;
    Direccion:string;
    Productos:Task[];
    Total: Number;
    Tarjeta:boolean;
}



