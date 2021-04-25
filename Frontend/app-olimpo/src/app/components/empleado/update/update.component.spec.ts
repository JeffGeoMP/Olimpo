import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { UpdateComponent } from './update.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Persona } from "../../../models/Task";
import { of } from 'rxjs';
import { CrudService } from 'src/app/servicios/empleado/crud.service';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../../login/login.component';
import { VistaComponent } from '../vista/vista.component';
import { Router } from '@angular/router';
import { LogueoService } from 'src/app/services/logueo.service';

class mockUpdate extends CrudService {
  updateEmpleado(data) {
    console.log("entra mock login")
    return of({ "id": 1, "ok": true });
  }
}

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  let service: CrudService;
  let mockService: mockUpdate;
  let http: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'Login', component: LoginComponent },
          { path: 'Empleado/vista', component: VistaComponent }
        ]),
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

    /*fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();*/

    TestBed.configureTestingModule({
      providers: [CrudService, HttpClient],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(CrudService);
    mockService = new mockUpdate(http);
    const routerstub: Router = TestBed.get(Router);
    component = new UpdateComponent(routerstub, mockService);

  });

  it('Validar empleado exitoso en la db',
    inject([HttpTestingController, CrudService],
      (httpMock: HttpTestingController, service: CrudService) => {
        // We call the service
        service.Validar("123", "123").subscribe(data => {
          expect(data).toBe('bien');

          service.updateEmpleado({ id_cuenta: 123, pass: "123" }).subscribe(data => {
            expect(data).toBe('bien');
          });
        });

        const req = httpMock.expectOne('http://localhost:3000/usuario/login/123/123');
        expect(req.request.method).toEqual('GET');
        req.flush("bien");

      })
  );

  it('Update empleado exitoso en la db',
    inject([HttpTestingController, CrudService],
      (httpMock: HttpTestingController, service: CrudService) => {
        // We call the service
        service.updateEmpleado({ id_cuenta: 123, pass: "123" }).subscribe(data => {
          expect(data).toBe('bien');
        });

        const req = httpMock.expectOne('http://localhost:3000/empleado/actualizacion');
        expect(req.request.method).toEqual('PUT');
        req.flush("bien");

      })
  );

  it('No validar empleado con error en la db',
    inject([HttpTestingController, CrudService],
      (httpMock: HttpTestingController, service: CrudService) => {
        // We call the service
        service.Validar("123", "123").subscribe(data => {
          expect(data).toBe(null);
        });

        const req = httpMock.expectOne('http://localhost:3000/usuario/login/123/123');
        expect(req.request.method).toEqual('GET');
        req.flush(null);

      })
  );

  it('No Update empleado con error en la db',
    inject([HttpTestingController, CrudService],
      (httpMock: HttpTestingController, service: CrudService) => {
        // We call the service
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
        service.updateEmpleado(component.empleado).subscribe(data => {
          expect(data).toBe(null);
        });

        const req = httpMock.expectOne('http://localhost:3000/empleado/actualizacion');
        expect(req.request.method).toEqual('PUT');
        req.flush(null);

      })
  );

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

  it('Metodo actualizar datos vacios', () => {
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
    component.pass1 = "";
    expect(component.actualizar()).toBeUndefined();
  });

  it('Metodo actualizar contraseñas validas', () => {
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
    component.nombre = "adsf";
    component.apellido = "asdf";
    component.telefono = "asdf";
    component.email = "asdf";
    component.direccion = "asdf";
    component.pass1 = "1";
    let res = null;
    expect(component.actualizar()).toBeUndefined();
  });

  /*it('Metodo val', () => {
    /*component.empleado = {
      "id_persona": 1,
      "nombre": "micky",
      "apellido": "micky",
      "telefono": "1",
      "correo": "1",
      "contraseña": "1",
      "direccion": "1",
      "tipo_persona": 2
    };*
    //let res:Persona[] = component.empleado as Persona[];
    expect(component.val()).toBeUndefined();
  });*/

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
