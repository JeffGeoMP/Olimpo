import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/servicios/factura.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  constructor(private  servFac:FacturaService) { }

  codigo:string = ""
  Enable_Table : boolean = false;
  Detalle_Factura: any[] = [];

  /**
   * Variables para Activacion de Variables
   */

  AlertSucessfull = false;
  AlertFailed = false;
  MessageAlert = "";

  ngOnInit(): void {
  }

  devuelto:any=[];
  msgError="";
  Buscar(id:string){
     this.servFac.ObtenerFactura(id).subscribe(
        result=>{
            this.Enable_Table = true;
            this.msgError=""
            this.devuelto=result;
            console.log(this.devuelto);
        },error=>{
            console.log(error);
            this.MessageFailed("Error Codigo No Valido")
        }

      );
  }

  Cambiar(id):string{
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

  ObtenerDetalle(){
    this.servFac.ObtenerDetalleFactura(this.devuelto[0].id_factura).subscribe((Response: any) =>{
      let index = 0;
      this.Detalle_Factura = [];
      Response.forEach(element => {
        let Schema = {
          Index : index,
          Id_Platillo: element.id_platillo,
          Nombre : element.nombre,
          Comentario: "",
          Calificado : false,
          Calificacion: 0,
          Estrellas: []
        }
        this.Detalle_Factura.push(Schema);
        index++;
      });
    }, error => console.error(error));
    
  }

  ValorarPlatillo(){
    if(this.ValidarEnvio()){
      console.log(this.Detalle_Factura);
      this.servFac.ValorarPedido(this.Detalle_Factura).subscribe((Response)=>{
        console.log(Response)
        this.MessageSucessfull("Gracias por Calificarnos Eso Nos Ayuda A Mejorar");
      },
      error => console.error(error));
    }else{
      this.MessageFailed("Faltan Campos por Validar, Porfavor Llene Todos Los Campos y Vuelva a Intentar");
    }
  }

  ValidarEnvio(){
    let Validacion = true;
    this.Detalle_Factura.forEach(element => {
      if(element.Comentario == "" || element.Calificado == false){
        Validacion = false;
      }
    });
    return Validacion;
  }

  Calificacion(Valor:Number, Index){
    try {
      let temp = [];
      for (let index = 0; index < Valor; index++) {
        temp.push("*");
      }
      
      this.Detalle_Factura[Index].Estrellas = temp;
      this.Detalle_Factura[Index].Calificacion = Valor;
      this.Detalle_Factura[Index].Calificado = true;

    } catch (error) {
      console.log(error);
    }
  }

  MessageSucessfull(Message){
    this.MessageAlert = Message
    this.AlertFailed = false;
    this.AlertSucessfull = true;

  }

  MessageFailed(Message){
    this.MessageAlert = Message
    this.AlertFailed = true;
    this.AlertSucessfull = false;
  }
}
