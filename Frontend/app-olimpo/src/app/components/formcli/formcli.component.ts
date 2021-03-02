import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formcli',
  templateUrl: './formcli.component.html',
  styleUrls: ['./formcli.component.css']
})
export class FormcliComponent implements OnInit {

  nombre:string=""
  apellido:string=""
  nit:string=""
  correo:string=""
  telefono:string=""
  direccion:string=""

  constructor() { }


  ngOnInit(): void {
  }
  Imprimir(){
      console.log(this.direccion);
  }

}
