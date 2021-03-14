import { Component, OnInit } from '@angular/core';
import { CrudService, Empleado } from 'src/app/servicios/empleado/crud.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router, private conexion: CrudService) { }

  ngOnInit(): void {
  }

  nombre = "";
  apellido = "";
  telefono = "";
  email = "";
  direccion = "";
  pass1 = "";
  pass2 = "";

  crear(){
    if(this.nombre == "" || this.apellido == "" || this.telefono == "" || this.email == "" || this.direccion == "" || this.pass1 == "" || this.pass2 == ""){
      alert("Datos vacios")
    }else{
      if(this.pass1 == this.pass2){    
        let con = this.conexion.createEmpleado({'Nombre': this.nombre,
                                    'Apellido': this.apellido,
                                    'Telefono': this.telefono,
                                    'Correo': this.email,
                                    'Password': this.pass1,
                                    'Direccion': this.direccion});
        
        con.subscribe((res)=>{
          console.log(res)
          if(res == null){
            alert("Usuario creado")
            this.router.navigate(['/Empleado/create'])
          }else{
            alert("Error al crear usuario: " + res)
          }
        });
        
      }
    }
  }

}
