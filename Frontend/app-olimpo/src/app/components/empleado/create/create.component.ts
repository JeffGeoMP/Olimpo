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

  nombre;
  apellido;
  telefono;
  email;
  direccion;
  pass1;
  pass2;

  crear(){
    
    
  }

}
