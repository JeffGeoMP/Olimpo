import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http:HttpClient) { }

  //API_URI='http://localhost:3000';
  API_URI='http://192.168.0.5:3000';

  GuardarFactura(fact:Factura){

    return this.http.post(`${this.API_URI}/pedido/nuevo/`,fact);
    
  }

  ObtenerFactura(codigo:string){

    return this.http.get(`${this.API_URI}/usuario/factura/`+codigo);
    
  }

  ObtenerFacturas(){

    return this.http.get(`${this.API_URI}/pedidos/`);
    
  }

  ObtenerDetalleFactura(codigo:string){
    return this.http.get(`${this.API_URI}/pedidos/detalle/`+codigo);
  }

  ValorarPedido(Detalle_Factura){
    return this.http.post(`${this.API_URI}/pedidos/valoracion/`,{Platillos: Detalle_Factura});
  }

  ActualizarFactura(codigo,estado){
    console.log(codigo);
    return this.http.post(`${this.API_URI}/pedido/actualizacion/`,{Id_Factura:codigo,Estado:estado});
  }


}
