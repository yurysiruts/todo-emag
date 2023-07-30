import { createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/components/todos/todo/todo.model";
import { addTodo, removeTodo, updateTodo } from "./todo.actions";

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [
    {
      id: '1',
      title: 'Title 1',
      content: 'text content x1',
      status: false
    },
    {
      id: '2',
      title: 'Title 2',
      content: 'text content x2',
      status: false
    },
  ],
}

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { title, content, date }) => ({
    ...state,
    todos: [...state.todos, { id: Date.now().toString(), title: title, content: content, status: false, createdAt: date ? new Date() : null }],
  })),
  on(updateTodo, (state, { updatedTodo }) => {
    const updatedTodos = state.todos.map((todo) =>
      todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
    );
    return { ...state, todos: updatedTodos };
  }),
  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
)