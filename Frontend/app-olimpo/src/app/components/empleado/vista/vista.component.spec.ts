import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaComponent } from './vista.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Persona } from "../../../models/Task";

describe('VistaComponent', () => {
  let component: VistaComponent;
  let fixture: ComponentFixture<VistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    let persona: Persona = {
      id_persona:1,
      nombre:"String",
      apellido:"String",
      telefono:"String",
      correo:"String",
      contraseña:"String",
      direccion:"String",
      tipo_persona:1,
    }
    
    localStorage.setItem("Logueado",JSON.stringify(persona));

    fixture = TestBed.createComponent(VistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    


  });

  it('ngOnInit', () => {
    component.empleado = {
      "id_persona": 1,
      "nombre": "micky",
      "apellido": "micky",
      "telefono": "1",
      "correo": "1",
      "contraseña": "1",
      "direccion": "1",
      "tipo_persona": 2
    };
    component.nombre = "";
    component.apellido = "";
    component.telefono = "";
    component.email = "";
    component.direccion = "";
    expect(component.ngOnInit()).toBeUndefined();
  });

  afterEach(() => {
    localStorage.removeItem("Logueado");
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
