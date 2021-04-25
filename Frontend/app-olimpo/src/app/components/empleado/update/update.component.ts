import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/empleado/crud.service';
import { Router } from '@angular/router';
import { Persona } from '../../../models/Task';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  empleado = null;

  constructor(private router: Router, private conexion: CrudService) {
    this.getLogueo();
    if (this.empleado == null) {
      this.router.navigate(['/Login']);
    }
  }

  getLogueo() {
    if (localStorage.getItem('Logueado') != null) {
      let Tas = localStorage.getItem('Logueado');
      this.empleado = JSON.parse(Tas || '{}');
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


  em: Persona;
  actualizar() {
    if (this.nombre == "" || this.apellido == "" || this.telefono == "" || this.email == "" || this.direccion == "" || this.pass1 == "") {
      alert("Datos vacios")
    } else if (this.pass1 == this.empleado.contraseña) {
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
      //console.log(this.empleado)
      this.conexion.updateEmpleado({
        'Id_Empleado': this.empleado.id_persona,
        'Nombre': this.nombre,
        'Apellido': this.apellido,
        'Telefono': this.telefono,
        'Correo': this.email,
        'Password': this.pass1,
        'Direccion': this.direccion,
        'Tipo': this.empleado.tipo_persona
      }).subscribe((res) => {
        //console.log(res);
        if (res != null) {
          this.val();

        } else {
          alert("Error al modificar usuario");
        }
      });

    }
  }

  val(){
    this.conexion.Validar(this.email, this.pass1).subscribe((res: Persona[]) => {
      this.em = res[0];
      localStorage.setItem("Logueado", JSON.stringify(this.em));
      alert("Usuario modificado");
      this.router.navigate(['/Empleado/vista']);
    }, (error: any) => {
      console.error(error);
    });
  }

}
