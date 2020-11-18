import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    private router: Router,
    //Create AlertController
    public alertController: AlertController
  ) {}


  //Import tasks from task.service.ts
  ngOnInit(){
    this.tasks = this.tasksService.getTasks()
  }


  //Jumps from home to a task editor
  goEditTask(id:number) { 
    //If id is not undefined, the use edit + id in the url, else put '' (nothing)
    this.router.navigateByUrl(`/edit${id != undefined ? '/' + id : ''}`);
  }


  //Import delete from task.service.ts
  deleteTask(id: number) {
    this.tasksService.deleteTask(id);
    //Update the task array and get the service's one
    this.tasks = this.tasksService.getTasks();
  }


  //Alert Controller
  async presentAlertConfirm(task: Task) {
    const taskId: number = task.id;
    const taskTitle: string = task.title;
    const alert = await this.alertController.create({
      //For changing alert styles: cssClass: 'my-custom-class',
      header: 'Delete Task',
      //Using `` for input info (interpolation)
      message: `'Do you really want to delete the task <strong>"${taskTitle}"</strong>?'`,
      buttons: [
        {
          text: 'Go back',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete it!',
          handler: () => {
            this.deleteTask(taskId);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }


}
