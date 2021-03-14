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
    console.log(data);
    return this.http.put(url, data);
  }

  deleteEmpleado(id){
    let url = `${this.dir}/empleado/eliminar`;
    console.log(id);
    return this.http.delete(url, id);
  }

}
