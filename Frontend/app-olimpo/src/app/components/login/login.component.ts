import { Component, OnInit } from '@angular/core';
import { LogueoService } from '../../services/logueo.service';
import {Persona} from '../../models/Task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  Usuario:Persona;
  User:String="";
  Pass:String="";
  Persona1:Persona;

  constructor(private Logueo:LogueoService, private router: Router) {
    if(this.Logueo.getLogueo() != null){
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    
  }
  
  Validar(){
   console.log(this.User);
   console.log(this.Pass);
    this.Logueo.Validar(this.User,this.Pass).subscribe((res:Persona[]) =>{
      this.Usuario=res[0];
      console.log(this.Usuario.nombre);
      this.User='';
      this.Pass='';
      this.Logueo.addLogueo(this.Usuario);
      this.router.navigate(['/']);
    },(error:any)=>{
      console.error(error);
      alert("El Usuario \""+ this.User+"\" NO EXISTE ");
      this.User='';
      this.Pass='';
    });
   
    
 }


}
