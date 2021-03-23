import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  
  temtotal:string="";
  tasks: Task[] = [];
  constructor() {
    this.tasks=[
    ];

   }

  

   getTotal(){
     this.Actualizar();
    let tem=localStorage.getItem("total");
    return tem;
   }

   getTask(){
     if(localStorage.getItem('tasks')===null){
       return this.tasks;
     }else{
       let Tas= localStorage.getItem('tasks');
       this.tasks= JSON.parse(Tas||'{}');
     return this.tasks;
     }
   }

   addTask(task:Task){
      this.tasks.push(task);
      let tasks:Task[]=[];
      if(localStorage.getItem('tasks')===null){
      this.tasks.push(task);
      localStorage.setItem("tasks",JSON.stringify(this.tasks));
      }else{
        let Tas=localStorage.getItem('tasks');
        JSON.parse(Tas||'{}');
        tasks.push(task);
        localStorage.setItem("tasks",JSON.stringify(this.tasks));
      }
    // 
     

   }

   delete(task:Task){
     for(let i=0;i<this.tasks.length;i++){
       if(task==this.tasks[i]){
         this.tasks.splice(i,1);
         localStorage.setItem("tasks",JSON.stringify(this.tasks));
       }

     }

   }

   Sumar(task:Task){
     
    for(let i=0;i<this.tasks.length;i++){
      if(task==this.tasks[i]){
        let tem= Number(this.tasks[i].Cantidad)+1;
        this.tasks[i].Cantidad=tem;
        this.tasks[i].Subtotal=tem*Number(this.tasks[i].Precio);

        localStorage.setItem("tasks",JSON.stringify(this.tasks));
        
      }

    }
    let tempo=this.getTotal()||'';
      this.temtotal =tempo.toString();
    return this.temtotal;

  }
  Restar(task:Task){
    for(let i=0;i<this.tasks.length;i++){
      if(task==this.tasks[i]){
        let tem= Number(this.tasks[i].Cantidad)-1;

        if(tem<=0){
                alert("Ya no puede disminuir la cantidad de su pedido");
        }else{
          this.tasks[i].Cantidad=tem;
        this.tasks[i].Subtotal=tem*Number(this.tasks[i].Precio);
        localStorage.setItem("tasks",JSON.stringify(this.tasks));
        }
        
      }
      

    }
    
    let tempo=this.getTotal()||'';
    this.temtotal =tempo.toString();
    return this.temtotal

  }

  Actualizar(){
    let tot=0;

    for(let i=0;i<this.tasks.length;i++){
      tot=tot+Number(this.tasks[i].Subtotal);
    }
    this.temtotal=tot.toString();

    localStorage.setItem("total",this.temtotal);
    
  }

}
