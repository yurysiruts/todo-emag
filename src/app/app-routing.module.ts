import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todos/todo/todo.component';
import { TodoCompletedComponent } from './components/todos/todo-completed/todo-completed.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    children: [
      {
        path: '',
        component: TodoComponent,
      },
      {
        path: 'completed',
        component: TodoCompletedComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'todo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
