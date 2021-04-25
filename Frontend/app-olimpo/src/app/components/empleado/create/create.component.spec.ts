import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CrudService } from 'src/app/servicios/empleado/crud.service';
import { of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from '../../login/login.component';
import { Router } from '@angular/router';

class mockCreate extends CrudService {

  createEmpleado(data) {
    console.log("entra mock login")
    return of({ "id": 1, "ok": true });
  }

}

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  let service: CrudService;
  let mockService: mockCreate;
  let http: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponent ],
      imports: [
        RouterTestingModule.withRoutes([{ path:'Login',component:LoginComponent}]),
        HttpClientTestingModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    /*fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();*/

    TestBed.configureTestingModule({
      providers: [CrudService, HttpClient],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(CrudService);
    mockService = new mockCreate(http);
    const routerstub: Router = TestBed.get(Router);
    component = new CreateComponent(routerstub, mockService);
  });

  /*afterEach(()=>{
    let Tas = localStorage.getItem("Logueado");
    component.empleado = JSON.parse(Tas || '{}');
    expect(component.getLogueo()).toBeUndefined();
  });*/

  it('Get logeo', () => {
    localStorage.setItem("Logueado", '{"id_persona": 1,"nombre": "micky","apellido": "micky","telefono": "1","correo": "1","contraseña": "1","direccion": "1","tipo_persona": 2}');
    expect(component.getLogueo()).toBeUndefined();
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
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('Validar empty en datos usuario', () => {
    expect(component.getLogueo()).toBeUndefined();
  });

  it('Validar empty en datos usuario', () => {
    component.nombre = "123";
    component.apellido = "123"
    component.telefono = "123"
    component.email = "123"
    component.direccion = "123"
    component.pass1 = "123"
    component.pass2 = "123"
    expect(component.crear()).toBeUndefined();
  });

  it('Creacion exitoso en la db - 2',
    inject([HttpTestingController, CrudService],
      (httpMock: HttpTestingController, service: CrudService) => {
        // We call the service
        service.createEmpleado({id_cuenta:123, pass:"123"}).subscribe(data => {
          //let aux = data as Usuario;
          expect(data).toBe(null);
          //expect(aux.pass).toBe('123');
        });

        const req = httpMock.expectOne('http://localhost:3000/empleado/nuevo');
        expect(req.request.method).toEqual('POST');
        req.flush(null);

      })
  );

  it('Existe en la db - 2',
    inject([HttpTestingController, CrudService],
      (httpMock: HttpTestingController, service: CrudService) => {
        // We call the service
        service.createEmpleado({id_cuenta:123, pass:"123"}).subscribe(data => {
          //let aux = data as Usuario;
          expect(data).toBe(null);
          //expect(aux.pass).toBe('123');
        });

        const req = httpMock.expectOne('http://localhost:3000/empleado/nuevo');
        expect(req.request.method).toEqual('POST');
        req.flush(null);

      })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
