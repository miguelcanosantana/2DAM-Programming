import { Injectable } from '@angular/core';
import { Task } from '../model/task';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = [];
  taskCounter: number = 0;

  constructor() {
    this.getTasksFromStorage().then(
      data => this.tasks = data
    );

    this.getTaskCounterFromStorage().then(
      data => this.taskCounter = data
    );
  }

  public getTasks(): Task[] {
    return this.tasks;
  }

  public async getTasksFromStorage(): Promise<Task[]> {
    const ret = await Storage.get({ key: 'tasks' });
    return JSON.parse(ret.value) ? JSON.parse(ret.value) : [];
  }

  public async getTaskCounterFromStorage(): Promise<number> {
    const { value } = await Storage.get({ key: 'taskCounter' });
    return value ? +value : 0;
  }

  public getTask(id: number) {
    return { ...this.tasks.filter(t => t.id === id)[0] };
  }

  public async saveTask(t: Task) {

    if (t.id == undefined) { // tarea nueva
      t.id = this.taskCounter++;
      this.tasks.push(t);
    } else { // edición de una tarea existente
      this.tasks = this.tasks.filter(ta => ta.id != t.id);
      this.tasks.push(t);
    }

    await this.saveTasks(this.tasks);
    await this.saveTaskCounter(this.taskCounter);
  }

  public async saveTasks(tasks: Task[]) {
    await Storage.set({
      key: 'tasks',
      value: JSON.stringify(tasks)
    });
  }

  public async saveTaskCounter(tc: number) {
    await Storage.set({
      key: 'taskCounter',
      value: '' + tc
    });
  }

  public async deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id != id);
    await this.saveTasks(this.tasks);
  }
}
