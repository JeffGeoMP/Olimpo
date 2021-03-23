import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/empleado/crud.service';
import {Router} from '@angular/router';
import {Persona} from '../../../models/Task';
import { LogueoService } from '../../../services/logueo.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

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

  eliminar(){
    if(confirm("Seguro que desea eliminar")){
      let con = this.conexion.deleteEmpleado({'Id_Empleado': this.empleado.id_persona});
      
      if(this.pass1 == this.empleado.contraseña){
        con.subscribe(res=>{
          if(res == null){
            this.Logueo.cleanLogueo();
            alert("Usuario eliminado");
            this.router.navigate(['/Login']);
          }else{
            alert("Error al eliminar usuario: " + res);
          }
        });
      }else{
        alert("Contraseñas no coinciden");
      }

    }else{
      this.router.navigate(['/Empleado/delete']);
    }
  }

}
