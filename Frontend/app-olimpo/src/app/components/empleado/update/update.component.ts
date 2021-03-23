import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/empleado/crud.service';
import {Router} from '@angular/router';
import { LogueoService } from '../../../services/logueo.service';
import {Persona} from '../../../models/Task';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  empleado = this.Logueo.getLogueo();

  constructor(private router: Router, private conexion: CrudService, private Logueo:LogueoService) {
    if(this.empleado == null){
      this.router.navigate(['/Login']);
    }
  }

  nombre;
  apellido;
  telefono;
  email;
  direccion;
  pass1;
  tipo;

  ngOnInit(): void {
    
    this.nombre = this.empleado.nombre;
    this.apellido = this.empleado.apellido;
    this.telefono = this.empleado.telefono;
    this.email = this.empleado.correo;
    this.direccion = this.empleado.direccion;
    
  }

  
  em:Persona;
  actualizar(){
    if(this.nombre == "" || this.apellido == "" || this.telefono == "" || this.email == "" || this.direccion == "" || this.pass1 == ""){
      alert("Datos vacios")
    }else if(this.pass1 == this.empleado.contraseña){
      let t = 0;
      /*if(this.tipo == "Empleado"){
        t = 2;
      }else if(this.tipo == "Usuario"){
        t = 1;
      }else if(this.tipo == "Administrador"){
        t = 0;
      }else{
        alert("Escoga un tipo de usuario");
        this.router.navigate(['/Empleado/update']);
      }*/
      console.log(this.empleado)
      let con = this.conexion.updateEmpleado({
        'Id_Empleado': this.empleado.id_persona,
        'Nombre': this.nombre,
        'Apellido': this.apellido,
        'Telefono': this.telefono,
        'Correo': this.email,
        'Password': this.pass1,
        'Direccion': this.direccion,
        'Tipo': this.empleado.tipo_persona
      });
      
      con.subscribe((res)=>{
        console.log(res);
        if(res != null){
          this.Logueo.Validar(this.email, this.pass1).subscribe((res:Persona[]) =>{
            this.em=res[0];
            this.Logueo.addLogueo(this.em);
            alert("Usuario modificado");
            this.router.navigate(['/Empleado/vista']);
          },(error:any)=>{
             console.error(error);
          });

        }else{
          alert("Error al modificar usuario");
        }
      });
        
    }
  }

}
