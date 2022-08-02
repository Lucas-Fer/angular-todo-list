import { Component, DoCheck, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck {
  public taskList: Array<{ task: string, checked: boolean }> = JSON.parse(localStorage.getItem('taskList') || '[]');
  constructor() { }

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public removeTask(target: number) {
    this.taskList.splice(target, 1);
  }

  public deleteAllTasks() {
    const confirm = window.confirm("Are you sure you want to delete all tasks?");

    if (confirm) this.taskList = [];
  }

  public setNewTask(taskValue: string) {
    this.taskList.push({ task: taskValue, checked: false })
  }

  public validateTask(taskValue: string, index: number) {
    if (!taskValue.length) {
      const confirm = window.confirm("Task is blank, you want to delete it?");
      if (confirm) this.removeTask(index);
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('taskList', JSON.stringify(this.taskList));
    }
  }
}
