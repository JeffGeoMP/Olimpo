import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Persona}from '../models/Task'

@Injectable({
  providedIn: 'root'
})
export class LogueoService {
  Empleado:Persona = null;

  constructor(private _httpClient:HttpClient) { }

  Validar(User:String,Pass:String){
    let url = 'http://localhost:3000/usuario/login/'+User+'/'+Pass;


    console.log(url);
    if(this._httpClient.get(url)){
      console.log("si");
    }else{
      console.log("no");
    }
    return this._httpClient.get(url);
}


addLogueo(empleadoL:Persona){
  localStorage.setItem("Logueado",JSON.stringify(empleadoL));
}

cleanLogueo(){
  localStorage.removeItem("Logueado");
}

getLogueo(){
  if(localStorage.getItem('Logueado')===null){
    return this.Empleado;
  }else{
    let Tas= localStorage.getItem('Logueado');
    this.Empleado= JSON.parse(Tas||'{}');
  return this.Empleado;
  }
}
 

}



