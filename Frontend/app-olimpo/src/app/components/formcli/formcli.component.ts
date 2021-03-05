import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task, Factura, Cliente } from 'src/app/models/Task';
import { FacturaService } from 'src/app/servicios/factura.service';

@Component({
  selector: 'app-formcli',
  templateUrl: './formcli.component.html',
  styleUrls: ['./formcli.component.css']
})
export class FormcliComponent implements OnInit {

  nombre:string=""
  apellido:string=""
  nit:string=""
  correo:string=""
  telefono:string=""
  direccion:string=""

  constructor(private srvtl:TaskService,private servFact:FacturaService) { }


  ngOnInit(): void {
  }

  productos:Task[]=[];

  fechas=new Date();
  
  fact1:Factura={
    Nombre:'',
    Apellido:'',
    Nit:'',
    Telefono:'',
    Correo:'',
    Direccion:'',
    Productos:null,
    Total:0,
    Tarjeta:false
  };
  user1:Cliente={
    Nombre:'',
    Apellido:'',
    Nit:'',
    Telefono:'',
    Correo:'',
    Direccion:''
  }
  Enviar(){

      this.productos=this.srvtl.getTask();
      //console.log(this.productos);
      this.user1.Nombre=this.nombre;
      this.user1.Apellido=this.apellido;
      this.user1.Nit=this.nit;
      this.user1.Correo=this.correo;
      this.user1.Telefono=this.telefono;
      this.user1.Direccion=this.direccion;
      
      this.fact1.Nombre=this.nombre;
      this.fact1.Apellido=this.apellido;
      this.fact1.Nit=this.nit;
      this.fact1.Telefono=this.telefono;
      this.fact1.Correo=this.correo;
      this.fact1.Direccion=this.direccion;
      this.fact1.Productos=this.productos;
      this.fact1.Total=Number(this.srvtl.getTotal());
      this.fact1.Tarjeta=false;

      console.log(this.fact1);

      /*
      this.servFact.GuardarFactura(this.fact1).subscribe(
        result=>{
          console.log(result);
        },error=>{
          console.log(error);
        }
        
      );*/
      
  }

}
