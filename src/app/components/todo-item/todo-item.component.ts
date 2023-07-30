import { Component, Input } from '@angular/core';
import { Todo } from '../todos/todo/todo.model';
import { Store } from '@ngrx/store';
import { removeTodo, updateTodo } from 'src/app/state/todos/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  
  @Input() todo!: Todo;
  
  editTodo: boolean = false;
  completed: boolean = false;
  titleInput: string = '';
  contentInput: string = '';

  constructor(private store: Store) {}

  ngOnInit() {
    this.titleInput = this.todo.title;
    this.contentInput = this.todo.content;
    this.completed = this.todo.status;
  }

  public toggleEdit() {
    this.editTodo = !this.editTodo;
  }

  public completeToggle() {
    this.completed = !this.completed;
    this.store.dispatch(updateTodo({
      updatedTodo: {
        id: this.todo.id,
        title: this.todo.title,
        content: this.todo.content,
        status: this.completed
      }
    }))
  }

  public updateTodo() {
    this.toggleEdit();
    this.store.dispatch(updateTodo({
      updatedTodo: {
        id: this.todo.id,
        title: this.titleInput,
        content: this.contentInput,
        status: this.todo.status
      }
    }))
  }
  
  public deleteTodo() {
    if (confirm('Are you sure you want to delete this task?')) {
      this.store.dispatch(removeTodo({ id: this.todo.id }))
    } 
  }
}
