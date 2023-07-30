import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { addTodo } from "src/app/state/todos/todo.actions";

@Component({
  selector: 'app-todo-form',
  templateUrl: 'todo-form.component.html',
  styleUrls: ['todo-form.component.scss']
})
export class TodoFormComponent {
  isSubmitted = false;
  todoForm: FormGroup;

  constructor(private store: Store) {
    this.todoForm = new FormGroup({
      title: new FormControl('', [ Validators.required ]),
      content: new FormControl('', [ Validators.required ]),
      date: new FormControl(false)
    });
  }

  addTodo() {
    this.isSubmitted = true;
    if (this.todoForm.valid) {
      console.log(this.todoForm.value);
      this.store.dispatch(addTodo({
        title: this.todoForm.value.title,
        content: this.todoForm.value.content,
        date:  this.todoForm.value.date
      }));
      this.todoForm.reset();
      this.isSubmitted = false;
    }
  }

}