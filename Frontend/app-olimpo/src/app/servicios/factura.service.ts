import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http:HttpClient) { }

  API_URI='http://localhost:3000';

  GuardarFactura(fact:Factura){

    return this.http.post(`${this.API_URI}/pedido/nuevo/`,fact);
    
  }

  ObtenerFactura(codigo:string){

    return this.http.post(`${this.API_URI}/pedido/get/`,{codigo:codigo});
    
  }
}
