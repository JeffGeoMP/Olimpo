import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    headers:HttpHeaders = new HttpHeaders({
        "Content-Type": "application/json",
    }) ;

    API_URI:string = 'http://localhost:3000';
    //API_URI:string = 'http://192.168.0.9:3000';
    constructor( private _httpClient:HttpClient ){
        console.log("listo para usar!!!");
    }

    getTiposMenus():Observable<TipoMenu[]>{
        return this._httpClient.get<TipoMenu[]>(`${this.API_URI}/producto/tiposMenu`);
    }

    crearProducto(producto: Producto){
        return this._httpClient.post(`${this.API_URI}/producto/nuevo`, producto);
    }

    actualizarProducto(producto: Producto){
        return this._httpClient.put(`${this.API_URI}/producto/actualizar`, producto);
    }

    eliminarProducto(producto: number){
        return this._httpClient.delete(`${this.API_URI}/producto/eliminar/${producto}`);
    }

    getProductos(){
        return this._httpClient.get(`${this.API_URI}/producto/platillos`);
    }

    getMenudeldia(){
        return this._httpClient.get(`${this.API_URI}/producto/menu_del_dia`);
    }

    updateMenudeldia(id){
        return this._httpClient.post(`${this.API_URI}/producto/actualizar_menu_del_dia`, id);
    }

    buscarProducto( termino:string ){
        termino = termino.toLocaleLowerCase();
        return this._httpClient.get(`${this.API_URI}/producto/busqueda/${termino}`);
    }

    productoxMenu(menu:string){
        menu = menu.toLocaleLowerCase();
        return this._httpClient.get(`${this.API_URI}/producto/menu/${menu}`);
    }

    productovaloracion(){
        return this._httpClient.get(`${this.API_URI}/producto/valoracion`);
    }

    comentarios(data){
        return this._httpClient.post(`${this.API_URI}/comentario`, data);
    }
}

export interface Producto{
    id_platillo: number,
    nombre: string,
    precio: number,
    descripcion: string,
    imagen: string,
}

export interface TipoMenu{
    id_menu: number,
    menu: string
}