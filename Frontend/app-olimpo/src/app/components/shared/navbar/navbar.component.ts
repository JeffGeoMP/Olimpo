import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Persona } from 'src/app/models/Task';
import { LogueoService } from '../../../services/logueo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  usuario:Persona;
  usr:Number;

  constructor( private router: Router, private Logueo:LogueoService) {
    this.usuario = this.Logueo.getLogueo();
    if(this.usuario != null){
      this.usr = this.usuario.tipo_persona;
    }else{
      this.usr = 0;
    }
  }
  
  ngOnInit(): void {
  }

  buscarProducto( termino:string ){
    console.log("termino " + termino);
    this.router.navigate( ['/buscar', termino]);
  }

  logout(){
    this.Logueo.cleanLogueo();
    this.router.navigate( ['/']);
  }

}
