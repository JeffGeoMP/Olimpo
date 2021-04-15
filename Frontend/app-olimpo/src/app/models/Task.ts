export interface Task{
    Id:Number,
    Nombre: string;
    Descripcion:string;
    Precio:number;
    Subtotal:number;
    Cantidad:number;

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

export interface Persona{
    id_persona:Number;
    nombre:String;
    apellido:String;
    telefono:String;
    correo:String;
    contraseña:String;
    direccion:String;
    tipo_persona:Number;
    
}

export interface Valorar{
    idplato:Number;
    estrellas:String;
}




