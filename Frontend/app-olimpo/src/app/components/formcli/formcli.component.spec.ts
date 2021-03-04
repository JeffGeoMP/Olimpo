import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcliComponent } from './formcli.component';

describe('FormcliComponent', () => {
  let component: FormcliComponent;
  let fixture: ComponentFixture<FormcliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
