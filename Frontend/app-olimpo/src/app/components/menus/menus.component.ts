import { Component, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/servicios/busqueda.service';
import { ProductService, Producto } from "../../servicios/productos.service";
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html'
})
export class MenusComponent implements OnInit {

  productos: Producto[] = [];
  productosdesayuno : Producto[] = [];
  productosalmuerzo : Producto[] = [];
  productosinfantil : Producto[] = [];
  productosrefaccion : Producto[] = [];

  constructor( private _productoService: ProductService, private servBusq:BusquedaService) {  }

  ngOnInit(): void {
    //desayunos
    this._productoService.productoxMenu('desayuno').subscribe((res:Producto[])=>{
      this.productosdesayuno = res;
      //console.log('imprimiendo desayuno');
      //console.log(this.productosdesayuno);
    })

    //Almuerzo
    this._productoService.productoxMenu('almuerzo').subscribe((res:Producto[])=>{
      this.productosalmuerzo = res;
      //console.log('imprimiendo desayuno');
      //console.log(this.productosdesayuno);
    })
    //Infantil
    this._productoService.productoxMenu('infantil').subscribe((res:Producto[])=>{
      this.productosinfantil = res;
      //console.log('imprimiendo desayuno');
      //console.log(this.productosdesayuno);
    })
    //Refaccion
    this._productoService.productoxMenu('refaccion').subscribe((res:Producto[])=>{
      this.productosrefaccion = res;
      //console.log('imprimiendo desayuno');
      //console.log(this.productosrefaccion);
    })
    //Extras
    //Refaccion

    /*this._productoService.getProductos().subscribe((res: Producto[]) =>{
      this.productos = res;
      console.log(this.productos);
    })*/
  }
}
