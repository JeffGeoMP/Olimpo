import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/empleado/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  empleado = null;

  nombre = "";
  apellido = "";
  telefono = "";
  email = "";
  direccion = "";
  pass1 = "";
  tipo = "";

  constructor(private router: Router, private conexion: CrudService) {
    /*if (this.empleado == null) {
      this.router.navigate(['Login']);
    }*/
  }

  getLogueo() {
    if (localStorage.getItem('Logueado') != null) {
      let Tas = localStorage.getItem('Logueado');
      this.empleado = JSON.parse(Tas);
    }
  }

  ngOnInit(): void {
    this.getLogueo();
    if (this.empleado == null) {
      this.router.navigate(['Login']);
    }
    
    this.nombre = this.empleado.nombre;
    this.apellido = this.empleado.apellido;
    this.telefono = this.empleado.telefono;
    this.email = this.empleado.correo;
    this.direccion = this.empleado.direccion;

  }

  eliminar() {
    if (confirm("Seguro que desea eliminar")) {
      let con = this.conexion.deleteEmpleado({ 'Id_Empleado': this.empleado.id_persona });

      if (this.pass1 == this.empleado.contraseña) {
        this.conexion.deleteEmpleado(
          { 'Id_Empleado': this.empleado.id_persona }
        ).subscribe(res => {
          if (res == null) {
            localStorage.removeItem("Logueado");
            alert("Usuario eliminado");
            this.router.navigate(['/Login']);
          } else {
            alert("Error al eliminar usuario: " + res);
          }
        });
      } else {
        alert("Contraseñas no coinciden");
      }

    } else {
      this.router.navigate(['/Empleado/delete']);
    }
  }

}
