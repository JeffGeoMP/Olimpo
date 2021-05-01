import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProductoComponent } from './top-producto.component';

describe('TopProductoComponent', () => {
  let component: TopProductoComponent;
  let fixture: ComponentFixture<TopProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
