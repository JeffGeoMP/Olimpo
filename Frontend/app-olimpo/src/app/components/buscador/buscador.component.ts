import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../servicios/productos.service";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  productos:any[] = [];
  termino:string;

  constructor( private activateRoute:ActivatedRoute ,
               private _productoService: ProductService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.productos = this._productoService.buscarProducto(params['termino']);
      console.log(this.productos);
      
    })
  }

}
