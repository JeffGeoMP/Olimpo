import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[]=[];
  tem:string="";
  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.tasks=this.taskService.getTask();
    let temi=this.taskService.getTotal()||'';
    this.tem=temi.toString();
    
  }
  delete(task:Task){
    if(confirm('Desea Eliminar el platillo')){
    this.taskService.delete(task);
    }

  }
  Restar(task:Task){
    
   this.tem= this.taskService.Restar(task);
 

  }
  Sumar(task:Task){
    this.tem=this.taskService.Sumar(task);
    

  }


}
