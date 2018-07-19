import {Component, Input, ViewChild, ElementRef, Output, EventEmitter} from "@angular/core";
import { Todo } from "../../todo.model";

@Component({
    selector:"appTodoListItem",
    templateUrl:"./TodoListItem.component.html"
})

export class TodoListItem{

    @Input() todo :Todo;
    @Output() onTodoCompleted:EventEmitter<Todo>=new EventEmitter();

    @ViewChild('card') cardLayout:ElementRef;


    onTodoComplete(todo:Todo){
        this.cardLayout.nativeElement.className="card bg-primary mt-2 rounded-3";
        this.onTodoCompleted.emit(todo);
    }
    onChanged(todo:Todo){
        if(todo.finish)
        {
            this.cardLayout.nativeElement.className="card bg-primary mt-2 rounded-3";
        }
        else{
            this.cardLayout.nativeElement.className="card bg-danger mt-2 rounded-3";
        }
    }

}