import { TestBed } from '@angular/core/testing';

import { FacturaService } from './factura.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Factura, Task } from '../models/Task';

describe('FacturaService', () => {
  let service: FacturaService;
  let fa: Factura;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(FacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Guardar factura', () => {
    let task: Task[] = [
      {
        Id: 123,
        Nombre: "string",
        Descripcion:"string",
        Precio: 24.3,
        Subtotal:24.3,
        Cantidad:1,
      },
    ]
    fa = {
      Nombre: "Patito",
      Apellido: "string",
      Nit: "123144555",
      Telefono: "42356687",
      Correo: "manases.juarez98@gmail.com",
      Direccion: "1-41",
      Productos:task,
      Total: 24.3,
      Tarjeta:false,
    }
    expect(service.GuardarFactura(fa).subscribe((respuesta)=>{
      expect(respuesta).toBeUndefined();
    }))
  });

  it('Obtener factura', ()=>{
    expect(service.ObtenerFactura("123").subscribe((res)=>{
      expect(res).toBeUndefined();
    }));
    expect(service.ObtenerFacturas().subscribe((res)=>{
      expect(res).toBeUndefined();
    }))
  });

  it('Actualizar factura', ()=>{
    expect(service.ActualizarFactura(123, 1).subscribe((res)=>{
      expect(res).toBeUndefined();
    }))
  })


});
