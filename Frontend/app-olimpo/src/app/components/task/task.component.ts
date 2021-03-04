import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
  task!: Task;
  @Output()
  Actualizar:EventEmitter<Number>;
  constructor(
    public taskServise:TaskService,
    private router: Router
  ) { 
    this.Actualizar=new EventEmitter()
  }

  ngOnInit(): void {
  }
  delete(task:Task){
    if(confirm('Desea Eliminar el platillo')){
    this.taskServise.delete(task);
    }

  }
  Restar(task:Task){
    
    this.taskServise.Restar(task);
    this.Actualizar.emit(15);
    

  }
  Sumar(task:Task){
    this.taskServise.Sumar(task);
    

  }

}
