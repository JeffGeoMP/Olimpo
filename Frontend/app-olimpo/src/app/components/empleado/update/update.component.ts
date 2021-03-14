import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/empleado/crud.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private router: Router, private conexion: CrudService) { }

  ngOnInit(): void {
  }

  
  Id_Empleado = "2";
  nombre = "";
  apellido = "";
  telefono = "";
  email = "";
  direccion = "";
  pass1 = "";
  tipo = "";

  actualizar(){
    if(this.nombre == "" || this.apellido == "" || this.telefono == "" || this.email == "" || this.direccion == "" || this.pass1 == ""){
      alert("Datos vacios")
    }else{
      let t = 0;
      if(this.tipo == "Empleado"){
        t = 2;
      }/*else if(this.tipo == "Usuario"){
        t = 1;
      }else if(this.tipo == "Administrador"){
        t = 0;
      }else{
        alert("Escoga un tipo de usuario");
        this.router.navigate(['/Empleado/update']);
      }*/
      let con = this.conexion.updateEmpleado({'Id_Empleado': this.Id_Empleado,
                                  'Nombre': this.nombre,
                                  'Apellido': this.apellido,
                                  'Telefono': this.telefono,
                                  'Correo': this.email,
                                  'Password': this.pass1,
                                  'Direccion': this.direccion,
                                  'Tipo': t});
      
      con.subscribe((res)=>{
        console.log(res);
        if(res == null){
          alert("Usuario modificado")
          this.router.navigate(['/Empleado/update']);
        }else{
          alert("Error al modificar usuario: " + res)
        }
      });
        
    }
  }

}
