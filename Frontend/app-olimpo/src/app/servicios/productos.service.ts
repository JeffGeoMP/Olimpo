import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    headers:HttpHeaders = new HttpHeaders({
        "Content-Type": "application/json",
    }) ;

    constructor( private _httpClient:HttpClient ){
        console.log("listo para usar!!!");
    }

    getProductos(){
        //let url = 'http://192.168.0.9:3000/producto/platillos';
        let url = 'http://localhost:3000/producto/platillos';
        return this._httpClient.get(url);
    }

    getMenudeldia(){
        //let url = 'http://192.168.0.9:3000/producto/menu_del_dia';
        let url = 'http://localhost:3000/producto/menu_del_dia';
        return this._httpClient.get(url);
    }

    buscarProducto( termino:string ){
        termino = termino.toLocaleLowerCase();
        //let url = 'http://192.168.0.9:3000/producto/busqueda/' + termino;
        let url = 'http://localhost:3000/producto/busqueda/' + termino;
        return this._httpClient.get(url);
    }

    productoxMenu(menu:string){
        menu = menu.toLocaleLowerCase();
        //let url = 'http://192.168.0.9:3000/producto/menu/'+menu;
        let url = 'http://localhost:3000/producto/menu/'+menu;
        return this._httpClient.get(url);
    }
}

export interface Producto{
    id_platillo: number;
    nombre: string;
    precio: number;
    descripcion: string;
    imagen: string; 
}