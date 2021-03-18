import { Component, OnInit } from '@angular/core';
import { LogueoService } from '../../services/logueo.service';
import {Task} from '../../models/Task';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  User:String="";
  Pass:String="";
  constructor(private Logueo:LogueoService) {
    

   }


  ngOnInit(): void {
  }
  Validar(){
    console.log(this.User);
    console.log(this.Pass);
    //Empleado:Persona[] = [];

    this.Logueo.Validar(this.User,this.Pass);
    /**
     .subscribe((res:Productos[]) =>{
      if(res.length != undefined){
       // this.productos = res;
      }else{
       // this.productos = new Array();
      }
      
      
    })
     */

  }


}
