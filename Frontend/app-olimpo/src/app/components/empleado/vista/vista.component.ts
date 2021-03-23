import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogueoService } from 'src/app/services/logueo.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  
  empleado = this.Logueo.getLogueo();
  
  constructor(private router: Router, private Logueo:LogueoService) {
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

}
