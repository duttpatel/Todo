import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

//component
import { AppComponent } from './app.component';
import {TodoCreate} from "./TodoCreate/TodoCreate.component";
import {TodoList} from "./TodoList/TodoList.component";
import {TodoListItem} from "./TodoList/TodoListItem/TodoListItem.component";


@NgModule({
  declarations: [
    AppComponent,
    TodoCreate,
    TodoList,
    TodoListItem
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
