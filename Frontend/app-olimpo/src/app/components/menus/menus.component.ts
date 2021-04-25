import { Component, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/servicios/busqueda.service';
import { ProductService, Producto } from "../../servicios/productos.service";
import {Router} from '@angular/router';
import { Task, Valorar, Comentario } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html'
})
export class MenusComponent implements OnInit {

  productos: Producto[] = [];
  tasks: Task[]=[];
  productosdesayuno : Producto[] = [];
  productosalmuerzo : Producto[] = [];
  productosinfantil : Producto[] = [];
  productosrefaccion : Producto[] = [];
  estrellas: Valorar[]=[];
  estrellasDes: Valorar[]=[];
  com:Comentario[] = [];
  p:Producto = {
    id_platillo: 1,
    nombre: "string",
    precio: 1,
    descripcion: "string",
    imagen: "string",
}

  constructor( private _productoService: ProductService, private servBusq:BusquedaService,
    private router: Router,
    public taskService: TaskService ) {  }

  ngOnInit(): void {

    this._productoService.productovaloracion().subscribe((res:Valorar[])=>{
      if(res != null){
        this.estrellas=res;
      }else{
        this.estrellas=[];
      }
      console.log(res);
    })

    //desayunos
    this._productoService.productoxMenu('desayuno').subscribe((res:Producto[])=>{
      this.productosdesayuno = res;
      console.log("desayunos")
      console.log(this.productosdesayuno);
    })

    //Almuerzo
    this._productoService.productoxMenu('almuerzo').subscribe((res:Producto[])=>{
      this.productosalmuerzo = res;
    })
    //Infantil
    this._productoService.productoxMenu('infantil').subscribe((res:Producto[])=>{
      this.productosinfantil = res;
    })
    //Refaccion
    this._productoService.productoxMenu('refaccion').subscribe((res:Producto[])=>{
      this.productosrefaccion = res;
    })

    //todos los productos
    /*this._productoService.getProductos().subscribe((res: Producto[]) =>{
      this.productos = res;
      console.log(this.productos);
    })*/

  }

  comm(id){
    this.p = id;
    //console.log(id)

    this._productoService.comentarios({id:id.id_platillo}).subscribe((res:Comentario[])=>{
      this.com = res;
      console.log(res);

      const div  = document.getElementById('rep_ast');
      div.style.display = 'block';
      const data  = document.getElementById('data');
      data.style.display = 'none';
    })

  }

  ocultar(){
    const div  = document.getElementById('rep_ast');
    const data  = document.getElementById('data');
    div.style.display = 'none';
    data.style.display = 'block';
  }

  obtenerEstrellas(id){
    for(let star of this.estrellas){
      if(id == star.idplato){
        return "assets/estrella"+star.estrellas+".jpg";
      }
    }
    //return "assets/estrella5.jpg";
    return null;
  }

  agregarCarrito(index: Producto){
    console.log(index);
    this.addTask(index.nombre,index.descripcion,index.precio,1,index.id_platillo);
    this.router.navigate(["/Task-list"]);
    
  }

  addTask( newTitle: any, newDescription: any,newPrecio: any, newCantidad: any,newid: Number){
    console.log('Agregando',newTitle,newDescription);
    this.taskService.addTask({
      Id:newid,
      Nombre: newTitle,
      Descripcion:newDescription,
      Precio:newPrecio,
      Cantidad:newCantidad,
      Subtotal: Number(newPrecio)*Number(newCantidad)
    });
  }
}