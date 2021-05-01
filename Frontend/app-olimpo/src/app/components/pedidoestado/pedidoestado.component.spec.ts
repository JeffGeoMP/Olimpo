import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoestadoComponent } from './pedidoestado.component';

describe('PedidoestadoComponent', () => {
  let component: PedidoestadoComponent;
  let fixture: ComponentFixture<PedidoestadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoestadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoestadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
