import { Component, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/servicios/busqueda.service';
import { ProductService, Producto } from "../../servicios/productos.service";
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styles: [
  ]
})
export class MenusComponent implements OnInit {

  productos: Producto[] = [];

  constructor( private _productoService: ProductService, private servBusq:BusquedaService) {
    console.log("Constructor");
    
  }

  ListaProductos:any;

  ngOnInit(): void {
    this.productos = this._productoService.getProductos();
    this.ObtenerProductos();
  }

  ObtenerProductos(){
    this.servBusq.ObtenerProductos().subscribe(
      result=>{
          this.ListaProductos=result;
      },error=>{
        console.log("error al obtener los productos",error);
      }
    );
}


Buscar(){

}


}
