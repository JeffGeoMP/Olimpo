import { Component, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/servicios/busqueda.service';
import { ProductService, Producto } from "../../servicios/productos.service";
import {Router} from '@angular/router';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html'
})
export class MenusComponent implements OnInit {

  productos: Producto[] = [];
  tasks: Task[]=[];

  constructor( private _productoService: ProductService, private servBusq:BusquedaService,
    private router: Router,
    public taskService: TaskService ) {  }

  ngOnInit(): void {
    this._productoService.getProductos().subscribe((res: Producto[]) =>{
      this.productos = res;
      console.log(this.productos);
    })
  }

  agregarCarrito(index: Producto){
    console.log(index);
    this.addTask(index.nombre,index.descripcion,index.precio,"1");
    this.router.navigate(["/Task-list"]);
    
  }

  addTask( newTitle: any, newDescription: any,newPrecio: any, newCantidad: any){
    console.log('Agregando',newTitle,newDescription);
    this.taskService.addTask({
      nombre: newTitle,
      descripcion:newDescription,
      Precio:newPrecio,
      Cantidad:newCantidad,
      Subtotal: String(Number(newPrecio)*Number(newCantidad))
    });
  }
   

}
