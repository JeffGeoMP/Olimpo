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
  //dir = 'http://192.168.0.9:3000'

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
    return this.http.post(url, id);
  }

  Validar(User:String,Pass:String){
    let url = 'http://localhost:3000/usuario/login/'+User+'/'+Pass;


    console.log(url);
    if(this.http.get(url)){
      console.log("si");
    }else{
      console.log("no");
    }
    return this.http.get(url);
}

}
