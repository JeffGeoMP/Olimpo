import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponent } from './update.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Persona } from "../../../models/Task";

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComponent ],
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

    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.removeItem("Logueado");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
