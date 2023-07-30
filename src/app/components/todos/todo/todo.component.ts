import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Todo } from "./todo.model";
import { selectAllTodos } from "../../../state/todos/todo.selectors";
import { Observable } from "rxjs";
import { AppState } from "src/app/state/app.state";

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.scss']
})
export class TodoComponent implements OnInit {
  
  public allTodos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.allTodos$ = this.store.select(selectAllTodos);
  }

  ngOnInit() {
    this.store.select(selectAllTodos).subscribe(console.log)
  }
}