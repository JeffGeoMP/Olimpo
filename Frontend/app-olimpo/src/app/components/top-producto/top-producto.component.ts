import { Component, OnInit } from '@angular/core';
import { Valorar } from 'src/app/models/Task';
import { Producto, Productos, ProductService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-top-producto',
  templateUrl: './top-producto.component.html',
  styleUrls: ['./top-producto.component.css']
})
export class TopProductoComponent implements OnInit {
  productosalmuerzo : Productos[] = [];
  estrellas: Valorar[]=[];
  estrellasDes: Valorar[]=[];
  p:Productos = {
    id_platillo: 1,
    nombre: "string",
    precio: 1,
    descripcion: "string",
    imagen: "string",
    total: 0
}

  constructor(private _productoService: ProductService) { }

  ngOnInit(): void {
    this._productoService.productoMenu().subscribe((res:Productos[])=>{
      this.productosalmuerzo = res;
    })
  }
  obtenerEstrellas(id){
    for(let star of this.estrellas){
      if(id == star.idplato){
        return "assets/estrella"+star.estrellas+".jpg";
      }
    }
   
    return "assets/estrella0.jpg";
  }

}
