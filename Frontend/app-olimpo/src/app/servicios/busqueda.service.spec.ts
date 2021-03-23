import { TestBed } from '@angular/core/testing';

import { BusquedaService } from './busqueda.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BusquedaService', () => {
  let service: BusquedaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(BusquedaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Prueba de rutas', ()=>{
    expect(service.GuardarProducto("Platanitos fritos").subscribe((res)=>{
      expect(res).toBeUndefined();
    }));

    expect(service.ObtenerProductos().subscribe((res)=>{
      expect(res).toBeUndefined();
    }));

    expect(service.ObtenerProducto("123").subscribe((res)=>{
      expect(res).toBeUndefined();
    }));
  });

  it('Editar producto', ()=>{
    expect(service.EditarProducto("120", "Caldo de pata").subscribe((res)=>{
      expect(res).toBeUndefined();
    }))
  });

  it('Eliminar producto', ()=>{
    expect(service.EliminarProducto("120").subscribe((res)=>{
      expect(res).toBeUndefined();
    }))
  });

});
