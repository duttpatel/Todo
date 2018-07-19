import { Component, OnInit } from '@angular/core';

import { TodoDataService } from './TodoData.service';

import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TodoDataService]
})
export class AppComponent  implements OnInit{

  todos:Todo [] = [];
  title = 'app';

  constructor(private todoDataService : TodoDataService){}

  ngOnInit(){
    this.todos = this.todoDataService.getTodos()
  }
  onAddTodo(todo:Todo){
    this.todoDataService.addTodo(todo);
  }
}
