import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { DeleteComponent } from './delete.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Persona } from "../../../models/Task";
import { CrudService } from 'src/app/servicios/empleado/crud.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../../login/login.component';
import { Router } from '@angular/router';

class mockDelete extends CrudService {
  deleteEmpleado(data) {
    console.log("entra mock login")
    return of({ "id": 1, "ok": true });
  }
}

fdescribe('DeleteComponent', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;

  let service: CrudService;
  let mockService: mockDelete;
  let http: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'Login', component: LoginComponent },
          { path: 'Empleado/delete', component: DeleteComponent }
        ]),
        HttpClientTestingModule,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    /*let persona: Persona = {
      id_persona:1,
      nombre:"String",
      apellido:"String",
      telefono:"String",
      correo:"String",
      contraseña:"String",
      direccion:"String",
      tipo_persona:1,
    }
    
    localStorage.setItem("Logueado",JSON.stringify(persona));*/

    /*fixture = TestBed.createComponent(DeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();*/

    TestBed.configureTestingModule({
      providers: [CrudService, HttpClient],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(CrudService);
    mockService = new mockDelete(http);
    const routerstub: Router = TestBed.get(Router);
    component = new DeleteComponent(routerstub, mockService);

  });

  it('Delete empleado exitoso en la db',
    inject([HttpTestingController, CrudService],
      (httpMock: HttpTestingController, service: CrudService) => {
        // We call the service
        service.deleteEmpleado({ id_cuenta: 123, pass: "123" }).subscribe(data => {
          expect(data).toBe('bien');
        });

        const req = httpMock.expectOne('http://localhost:3000/empleado/eliminar');
        expect(req.request.method).toEqual('POST');
        req.flush("bien");

      })
  );

  it('Delete mal en la db',
    inject([HttpTestingController, CrudService],
      (httpMock: HttpTestingController, service: CrudService) => {
        // We call the service
        service.deleteEmpleado({ id_cuenta: 123, pass: "123" }).subscribe(data => {
          expect(data).toBe(null);
        });

        const req = httpMock.expectOne('http://localhost:3000/empleado/eliminar');
        expect(req.request.method).toEqual('POST');
        req.flush(null);
        
      })
      
  );

  it('Get logeo', () => {
    let Tas = localStorage.getItem("Logueado");
    component.empleado = JSON.parse(Tas);
    expect(component.getLogueo()).toBeUndefined();
  });

  it('Metodo eliminar', () => {
    component.empleado = {id_persona:1, contraseña:"1"};
    component.pass1 = "1";
    
    expect(component.eliminar()).toBeUndefined();
  });

  it('should create', () => {
    component.nombre = "";
    expect(component).toBeTruthy();
  });
});
