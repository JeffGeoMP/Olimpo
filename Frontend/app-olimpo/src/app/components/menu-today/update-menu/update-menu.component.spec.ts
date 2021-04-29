import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ProductService, Producto } from 'src/app/servicios/productos.service';

import { UpdateMenuComponent } from './update-menu.component';
import { of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuTodayComponent } from '../menu-today.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';

class mockLogin extends ProductService {

  updateMenudeldia(data) {
    console.log("entra mock login")
    return of({ "id": 1, "ok": true });
  }

}

describe('UpdateMenuComponent', () => {
  let component: UpdateMenuComponent;
  let fixture: ComponentFixture<UpdateMenuComponent>;

  let service: ProductService;
  let mockService: mockLogin;
  let http: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path:'MenuToday', component: MenuTodayComponent},])
        , HttpClientModule]
      ,declarations: [ UpdateMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    /*fixture = TestBed.createComponent(UpdateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();*/

    TestBed.configureTestingModule({
      providers: [ProductService, HttpClient],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(ProductService);
    mockService = new mockLogin(http);
    const routerstub: Router = TestBed.get(Router);
    component = new UpdateMenuComponent(mockService, routerstub);
  });

  it('Validar funcion update reciba datos', () => {
    expect(component.update({id:1})).toBeUndefined();
  });

  it('Validar funcion platillos posibles',
    inject([HttpTestingController, ProductService],
      (httpMock: HttpTestingController, service: ProductService) => {
        service.productoxMenu("almuerzo").subscribe(data => {
          let aux = data as Producto[];
          expect(aux[0].id_platillo).toBe(1);
        });

        const req = httpMock.expectOne('http://localhost:3000/producto/menu/almuerzo');
        expect(req.request.method).toEqual('GET');
        req.flush([{id_platillo:1}]);
      })
  );

  it('1. Datos validos en la db - cambio exitoso',
    inject([HttpTestingController, ProductService],
      (httpMock: HttpTestingController, service: ProductService) => {
        service.updateMenudeldia({"id":1234}).subscribe(data => {
          expect(data).toBe(null);
        });

        const req = httpMock.expectOne('http://localhost:3000/producto/actualizar_menu_del_dia');
        expect(req.request.method).toEqual('POST');
        req.flush(null);
      })
  );

  it('2. Datos no validos en la db - error en el cambio',
    inject([HttpTestingController, ProductService],
      (httpMock: HttpTestingController, service: ProductService) => {
        service.updateMenudeldia({"id":1234}).subscribe(data => {
          expect(data).toBe(null);
        });

        const req = httpMock.expectOne('http://localhost:3000/producto/actualizar_menu_del_dia');
        expect(req.request.method).toEqual('POST');
        req.flush(null);
      })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
