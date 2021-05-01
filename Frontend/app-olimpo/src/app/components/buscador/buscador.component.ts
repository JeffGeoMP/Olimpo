import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Producto, ProductService } from "../../servicios/productos.service";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  productos:Producto[] = [];
  termino:string;

  constructor( private activateRoute:ActivatedRoute ,
               private _productoService: ProductService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this._productoService.buscarProducto(this.termino).subscribe((res:Producto[]) =>{
        if(res.length != undefined){
          this.productos = res;
        }else{
          this.productos = new Array();
        }
        
        
      })
    });
    console.log(this.productos);
  }

}
