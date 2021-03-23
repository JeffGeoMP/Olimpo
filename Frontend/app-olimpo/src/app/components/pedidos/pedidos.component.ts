import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacturaService } from 'src/app/servicios/factura.service';
import { resourceLimits } from 'worker_threads';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private rout:Router,private servFac:FacturaService) { }


  ListaPedidos:any=[];

  ngOnInit(): void {
    this.ObtenerFacturas();
  }


  
  EnProceso(id){
    this.servFac.ActualizarFactura(id,2).subscribe(
      result=>{
        console.log(result);
        this.rout.navigate(['/pedidoestado']);
      },error=>{
        console.log(error);
      }
    );
  }

  
  Listo(id){
    this.servFac.ActualizarFactura(id,3).subscribe(
      result=>{
        console.log(result);
        this.rout.navigate(['/pedidoestado']);
      },error=>{
        console.log(error);
      }
    );
  }


 
  
  
  ObtenerFacturas(){
      this.servFac.ObtenerFacturas().subscribe(
        result=>{
            this.ListaPedidos=result;
        },error=>{
          console.log(error);
        }
      );

  }



}
