import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusComponent } from './menus.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: MenusComponent;
  let fixture: ComponentFixture<MenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Obtencion de estrellas', () =>{
    let id= 1;
    let star = {
        descripcion: "Frijoles volteados, huevo al gusto, jugo de naranja o cafe",
        id_platillo: 1,
        imagen: "Desayuno_tipico.jpg",
        nombre: "Tipico",
        precio: "30.00"
    };  
    
    component.obtenerEstrellas(id);
    
  })
});