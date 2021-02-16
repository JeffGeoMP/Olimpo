import { Component, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/servicios/busqueda.service';

@Component({
  selector: 'app-menu-today',
  templateUrl: './menu-today.component.html'
})
export class MenuTodayComponent implements OnInit {

  constructor(private servBusq:BusquedaService) { }
  ListaProductos:any;
  ngOnInit(): void {
    
  }

  ObtenerProductos(){
    this.servBusq.ObtenerProductos().subscribe(
      result=>{
          this.ListaProductos=result;
      },error=>{
        console.log("error al obtener los productos");
      }
    );
}

EliminarProducto(id:Number){

}

Buscar(){
  
}

}
