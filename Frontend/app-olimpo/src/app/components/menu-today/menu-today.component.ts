import { Component, OnInit } from '@angular/core';
import { ProductService, Producto } from "../../servicios/productos.service";

@Component({
  selector: 'app-menu-today',
  templateUrl: './menu-today.component.html',
  styleUrls: ['./menu-today.component.css']
})
export class MenuTodayComponent implements OnInit {

  producto: Producto = {id_platillo: 0,
    nombre: "Undefined",
    precio: 0,
    descripcion: "",
    imagen: ""
  };
  
  imagen: string = "./assets/menus/";
  constructor( private _productoService: ProductService) { }

  
  ngOnInit(): void {
    this._productoService.getMenudeldia().subscribe((res: Producto[]) => {
      this.producto = res[0];
      this.producto.imagen = this.imagen + this.producto.imagen;      
    })
  }

}
