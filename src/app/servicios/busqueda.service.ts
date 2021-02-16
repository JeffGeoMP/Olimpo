import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Models/models';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor(private http:HttpClient) { }
  API_URI='http://ipServidor:3000/api';

  GuardarProducto(prod:Producto){

    return this.http.post(`${this.API_URI}/productos`,prod);
    
  }

  public ObtenerProductos(){
    return this.http.get(`${this.API_URI}/productos`);
  }

  public ObtenerProducto(id:String){
    return this.http.get(`${this.API_URI}/productos/`+id);
  }

  public EditarProducto(id:String,prod:Producto){
    //console.log(`${this.API_URI}/sedes/`+id);
    return this.http.put(`${this.API_URI}/productos/`+id,prod);
  }

  public EliminarProducto(id:String){
    return this.http.delete(`${this.API_URI}/productos/`+id);
  }
}
