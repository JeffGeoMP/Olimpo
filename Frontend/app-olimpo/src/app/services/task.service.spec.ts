import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  let component: TaskService;
  let fixture: ComponentFixture<TaskService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});