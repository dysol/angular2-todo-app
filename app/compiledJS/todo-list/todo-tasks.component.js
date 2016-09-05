"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import { TaskService }  from './task.service';
var TodoTasksComponent = (function () {
    function TodoTasksComponent() {
    }
    // constructor(private taskService: TaskService) { }
    TodoTasksComponent.prototype.checkDone = function () {
        console.log(this.task.status);
        return true;
    };
    TodoTasksComponent = __decorate([
        core_1.Component({
            selector: 'todo-tasks',
            templateUrl: 'app/html/todo-tasks.html',
            styleUrls: ['app/css/todo-tasks.css'],
            inputs: ['task'],
        }), 
        __metadata('design:paramtypes', [])
    ], TodoTasksComponent);
    return TodoTasksComponent;
}());
exports.TodoTasksComponent = TodoTasksComponent;
//# sourceMappingURL=todo-tasks.component.js.map