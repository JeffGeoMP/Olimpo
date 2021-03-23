import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TaskService', () => {
  let component: TaskService;
  let fixture: ComponentFixture<TaskService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskService ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
