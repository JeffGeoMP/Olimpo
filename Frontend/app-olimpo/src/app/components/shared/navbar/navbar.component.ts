import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  buscarProducto( termino:string ){
    console.log("termino " + termino);
    this.router.navigate( ['/buscar', termino]);
  }

}