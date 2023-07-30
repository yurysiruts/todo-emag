import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './components/todos/todo/todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { todoReducer } from './state/todos/todo.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoCompletedComponent } from './components/todos/todo-completed/todo-completed.component';
import { TodosComponent } from './components/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoFormComponent,
    TodoItemComponent,
    ButtonComponent,
    TodoCompletedComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todosState: todoReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
