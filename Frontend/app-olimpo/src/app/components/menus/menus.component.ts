import { Component, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/servicios/busqueda.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styles: [
  ]
})
export class MenusComponent implements OnInit {

  constructor(private servBusq:BusquedaService) { }

  ListaProductos:any;

  ngOnInit(): void {
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
