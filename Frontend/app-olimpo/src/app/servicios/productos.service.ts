import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productos: Producto[] = [
        {
            precio: "5.00",
            nombre: "Pepsi",
            descripcion: "Bebida gasesosa enlatada",
            img: "assets/menus/gaseosa1.png"
        },
        {
            precio: "40.00",
            nombre: "Pepian",
            descripcion: "Comida tipica incluye arroz etc.",
            img: "assets/menus/pepian.png"
        }
    ];

    constructor(){
        console.log("listo para usar!!!");
    }

    getProductos(){
        return this.productos;
    }

    buscarProducto( termino:string ){
        let productosArr:Producto[] = [];
        termino = termino.toLocaleLowerCase();

        for(let producto of this.productos ){
            let nombre = producto.nombre.toLowerCase();
            if( nombre.indexOf( termino ) >= 0){
                productosArr.push( producto );
            }
        }

        return productosArr;
    }
}

export interface Producto{
    precio: string;
    nombre: string;
    descripcion: string;
    img: string;   
}