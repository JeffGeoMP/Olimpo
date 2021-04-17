import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Producto } from "../../../servicios/productos.service";

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {
  productosalmuerzo : Producto[] = [];

  constructor(private _productoService: ProductService, private router: Router) { }

  ngOnInit(/*private _productoService: ProductService, private router: Router*/): void {
    this._productoService.productoxMenu('almuerzo').subscribe((res:Producto[])=>{
      this.productosalmuerzo = res;
    })
  }

  update(id){
    console.log(id);
    this._productoService.updateMenudeldia({"id":id}).subscribe((res:Producto[])=>{
      alert("Menu del Dia actualizado");
      this.router.navigate(["/MenuToday"]);
    });
    
  }

}
