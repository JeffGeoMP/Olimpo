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

  dir = 'http://localhost:3000/';

  getEmpleado(id){
    let url = `${this.dir}/getEmpleado`;
    return this.http.get(url, id);
  }

  createEmpleado(data){
    let url = `${this.dir}/createEmpleado`;
    return this.http.post(url, data);
  }

  updateEmpleado(data){
    let url = `${this.dir}/updateEmpleado`;
    return this.http.put(url, data);
  }

  deleteEmpleado(id){
    let url = `${this.dir}/deleteEmpleado`;
    return this.http.delete(url, id);
  }

}

export interface Empleado{
  id_persona,
  Nombre,
  Apellido,
  Telefono,
  Correo,
  contraseña,
  Direccion,
  Tipo_Persona,
};
