import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  constructor() { }

  codigo:string=""

  ngOnInit(): void {
  }

  Buscar(id:string){
      console.log("el codigo es: ",id);
  }
}
