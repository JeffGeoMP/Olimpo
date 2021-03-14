import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  dir = 'http://localhost:3000';

  createEmpleado(data){
    let url = `${this.dir}/empleado/nuevo`;
    return this.http.post(url, data);
  }

  updateEmpleado(data){
    let url = `${this.dir}/empleado/actualizacion`;
    return this.http.put(url, data);
  }

  deleteEmpleado(id){
    let url = `${this.dir}/empleado/eliminar`;
    return this.http.delete(url, id);
  }

}

export interface Empleado{
    Id_Empleado:string,
    Nombre:string,
		Apellido:string,
		Telefono:string,
		Correo:string,
		Password:string,
		Direccion:string
}