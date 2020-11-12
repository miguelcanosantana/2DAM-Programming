import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../model/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //An array of tasks
  tasks: Task[] = []


  //It can also be defined outside constructor
  constructor(
    //Use TaskService from the Services folder
    private tasksService: TasksService, 
    //Router allows page redirects inside the code
    private router: Router
  ) {}


  //Import tasks from service
  ngOnInit(){
    this.tasks = this.tasksService.getTask()
  }


  //Jumps from home to a task editor
  goEditTask() {
    this.router.navigateByUrl('/edit');

  }

}
