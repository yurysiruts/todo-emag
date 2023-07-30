import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { selectCompletedTodos } from "../../../state/todos/todo.selectors";
import { Observable } from "rxjs";
import { AppState } from "src/app/state/app.state";
import { Todo } from "../todo/todo.model";

@Component({
  selector: 'app-todo-completed',
  templateUrl: 'todo-completed.component.html',
  styleUrls: ['todo-completed.component.scss']
})
export class TodoCompletedComponent implements OnInit {
  
  public completedTodos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.completedTodos$ = this.store.select(selectCompletedTodos);
  }

  ngOnInit() {
    this.store.select(selectCompletedTodos).subscribe((val) => console.log('compl only', val))
  }
}