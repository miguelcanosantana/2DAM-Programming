import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  //Array of Task Objects initialized empty and not null
  tasks: Task[] = [];

  //Taks ids counter
  taskCounter: number = 5;

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
        title: 'Arrange your mind',
        description: 'Empty all bad feelings and dance'
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
  public getTasks(): Task[] {
    return this.tasks;
  }

  //Get a Task from the id 
  public getTask(id: number): Task {
    //Need to specify 0 because need to return an array of 1 task at index 0
    //Use ... inside {} to create a copy and not use a reference
    //for fixing the problem where you go back and note is saved
    return {...this.tasks.filter(t => t.id === id)[0]};
  }

  //Service for saving a task inside tasks Array
  public saveTask(t: Task) {
    t.id = this.taskCounter++;
    this.tasks.push(t);
  
  }

  //Delete a Task given it's id
  public deleteTask(givenId: number) {

    //Task list = Filter all elements that their id is diferent from givenId
    console.log (this.tasks.filter(t => t.id == givenId));
    this.tasks = this.tasks.filter(t => t.id != givenId);

  }


}
