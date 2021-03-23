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

  devuelto:any=[];
  msgError="";
  Buscar(id:string){
     // console.log("el codigo es: ",id);
      this.servFac.ObtenerFactura(id).subscribe(
        result=>{
            this.msgError=""
            this.devuelto=result;
            console.log(this.devuelto);
        },error=>{
            console.log(error);
            this.msgError="Error Codigo no válido"
        }

      );
  }

  Cambiar(id):string{
      console.log(id);
      switch (id){
        case 1:
          return "En Cola";
        case 2:
          return "En Preparación";
        case 3:
          return "Listo";
        default:
          return "otro";  
      }
  }


}
