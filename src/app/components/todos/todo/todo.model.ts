import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface Todo {
  id: string,
  title: string,
  content: string,
  status: boolean,
  createdAt?: Date | null
}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
  selectId: (todo: Todo) => todo.id,
})