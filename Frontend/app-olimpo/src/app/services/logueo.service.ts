import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogueoService {

  constructor(private _httpClient:HttpClient) { }

  Validar(User:String,Pass:String){
    let url = 'http://localhost:3000/Logueo/:'+User+'/:'+Pass;
    return this._httpClient.get(url);
}

}

