import { Component,Input} from '@angular/core';
import { Todo } from '../todo.model';
import { TodoDataService } from '../TodoData.service';

@Component({
    selector:"appTodoList",
    templateUrl:"./TodoList.component.html"
})

export class TodoList{

    @Input() todos:Todo[]=[];

    constructor(private tododataservice:TodoDataService){}

    onTodoComplete(todo:Todo){
        console.log("this task is done : "+todo.task);
    }
}