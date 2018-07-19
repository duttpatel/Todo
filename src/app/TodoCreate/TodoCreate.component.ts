import {Component, Output, EventEmitter} from "@angular/core";
import { Todo } from "../todo.model";


//import todo class module

@Component({
    selector:"appTodoCreate",
    templateUrl:"./TodoCreate.component.html"
})

export class TodoCreate{

    //Holding new Todo
    newtodo:Todo = new Todo();

    @Output() onAddedTodo= new EventEmitter<Todo>(); 

    constructor(){}

    //adding todo to todos array
    addTodo(){
        this.newtodo.finish=false;
        this.onAddedTodo.emit(this.newtodo);
        this.newtodo=new Todo();
    }


}