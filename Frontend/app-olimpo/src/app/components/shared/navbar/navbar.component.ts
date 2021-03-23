import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LogueoService } from '../../../services/logueo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  usuario;

  constructor( private router: Router, private Logueo:LogueoService) {
    this.usuario = this.Logueo.getLogueo();
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
