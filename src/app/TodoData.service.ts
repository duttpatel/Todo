//import model class of todo
import {Todo} from './todo.model';
import { Observable } from 'rxjs/Observable';

export class TodoDataService{

    lastId:number=0;
    todos : Todo[]=[];

    constructor(){}

    
    //Add todo in array
    addTodo(todo:Todo){
        if(!todo.getTodoId()){
            todo.id=++this.lastId;
        }
        this.todos.push(todo);
    }

    //update todo by id
    updateTodo(id:number,todo:Todo){

    }

    //Delete Todo by id
    deleteTodo(id:number){
        this.todos=this.todos.filter(todo=> todo.getTodoId() != id);
    }

    //toggle Todo 
    toggleTodo(){

    }

    //get all todo
    getTodos():Todo[]{
        return this.todos;
    }

    //get todo by id
    getTodoById(id:number):Todo{

        return this.todos.filter(todo => todo.getTodoId() === id).pop();
    }

}