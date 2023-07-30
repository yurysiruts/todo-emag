import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { TodoState } from "./todo.reducer";

const selectTodosState = (appState: AppState) => appState.todosState;

export const selectAllTodos = createSelector(
  selectTodosState,
  (state: TodoState) => state.todos.slice().reverse()
)

export const selectCompletedTodos = createSelector(
  selectAllTodos,
  (todos) => todos.filter((todo) => todo.status === true)
)
