import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-input-add-itens',
  templateUrl: './to-do-input-add-itens.component.html',
  styleUrls: ['./to-do-input-add-itens.component.scss']
})
export class ToDoInputAddItensComponent implements OnInit {
  @Output() emitNewTask = new EventEmitter();
  public newTask: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  public submitNewTask() {
    this.newTask = this.newTask.trim();
    if (this.newTask) {
      this.emitNewTask.emit(this.newTask);
      this.newTask = "";
    }
  }

}
