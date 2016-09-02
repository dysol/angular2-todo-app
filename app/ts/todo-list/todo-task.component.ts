import { Component } from '@angular/core';
import { Task }      from './task';

@Component({
    selector:     'todo-task',
    templateUrl:  'app/html/todo-task.html',
    styleUrls:    ['app/css/todo-task.css'],
    inputs:       ['task'],
})
export class TodoTaskComponent {
  // set property task to take schema from Task model
  task: Task;

  // constructor() {
  //   this.task = new Task('Do Todo App', false);
  // }

  taskChecked(): boolean {
    this.task.taskChecked();
    return false;
  }
}