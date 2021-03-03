import { Component, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/servicios/busqueda.service';
import { ProductService, Producto } from "../../servicios/productos.service";
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html'
})
export class MenusComponent implements OnInit {

  productos: Producto[] = [];

  constructor( private _productoService: ProductService, private servBusq:BusquedaService) {  }

  ngOnInit(): void {
    this._productoService.getProductos().subscribe((res: Producto[]) =>{
      this.productos = res;
      console.log(this.productos);
    })
  }

  agregarCarrito(index: Producto){
    console.log(index);
    
  }
}
