import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/components/todos/todo/todo.model";

export const addTodo = createAction(
  '[Todo Page] Add Todo',
  props<{ title: string, content: string, date?: boolean }>()
)

export const updateTodo = createAction(
  '[Todo Page] Update Todo',
  props<{ updatedTodo: Todo }>()
)

export const removeTodo = createAction(
  '[Todo Page] Remove Todo',
  props<{ id: string | number }>()
)