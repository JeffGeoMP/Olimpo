import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/servicios/factura.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  constructor(private  servFac:FacturaService) { }

  codigo:string=""

  ngOnInit(): void {
  }

  devuelto:any;

  Buscar(id:string){
      console.log("el codigo es: ",id);
      this.servFac.ObtenerFactura(id).subscribe(
        result=>{
            this.devuelto=result;
        },error=>{
            console.log(error);
        }

      );
  }


}
