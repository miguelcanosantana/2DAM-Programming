import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  //Array of Task Objects initialized empty and not null
  tasks: Task[] = [];

  //Taks ids counter
  taskCounter: number = 4;

  constructor() { 
    //Initialize with jsons tasks list
    this.tasks = [
      {
        id: 0,
        title: 'Arrange the desktop',
        description: 'Empty all the folders and rearrange them'
      },
      {
        id: 1,
        title: 'Arrange the desktop',
        description: 'Empty all the folders and rearrange them'
      },
      {
        id: 2,
        title: 'Do the laundry',
        description: 'Light clothing first'
      },
      {
        id: 3,
        title: 'Check the wardrobe',
        description: 'Order clothing by colors'
      },
      {
        id: 4,
        title: 'Buy toilet paper',
        description: 'Buy all and empty the entire supermarket, like if we were living in a pandemic or something'
      }
      
    ];

  }


  //Return the tasks of the service
  public getTask(): Task[] {
    return this.tasks;
  }

  //Service for saving a task inside tasks Array
  public saveTask(t: Task) {
    t.id = this.taskCounter++;
    this.tasks.push(t);
  
  }


}
