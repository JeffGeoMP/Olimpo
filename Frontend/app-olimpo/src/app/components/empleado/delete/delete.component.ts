import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/empleado/crud.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  sesion;

  constructor(private router: Router, private conexion: CrudService) { 
    /*Cuando haya una sesion en local storage de momento todo quemado
    if(localStorage.getItem("sesion") != null){
      this.sesion = JSON.parse(localStorage.getItem("sesion") +"")[0]
    } */
  }

  ngOnInit(): void {
  }

  Id_Empleado = "9";
  nombre = "";
  apellido = "";
  telefono = "";
  email = "";
  direccion = "";
  pass1 = "";
  pass2 = "";

  eliminar(){
    if(confirm("Seguro que desea eliminar")){    
      let con = this.conexion.deleteEmpleado({'nada':'jeje', 'Id_Empleado': this.Id_Empleado});
      
      con.subscribe(res=>{
        if(res == null){
          console.log(res)
          alert("Usuario eliminado")
          this.router.navigate(['/Empleado/delete'])
        }else{
          alert("Error al eliminar usuario: " + res)
        } 
      });
      
    }
  }

}
