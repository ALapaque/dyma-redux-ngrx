import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoService } from '../services/todo.service';
import { TodoEffects } from './store/todo.effects';
import { todosReducer } from './store/todo.reducer';
import { TodosComponent } from './todos.component';


@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    StoreModule.forFeature('todos', todosReducer),
    EffectsModule.forFeature([ TodoEffects ]),
    RouterModule.forChild([
      {
        path: '', component: TodosComponent, children: [
          {
            path: '', component: TodoListComponent,
          },
          {
            path: ':id', component: TodoListComponent
          }
        ]
      }
    ])
  ],
  providers: [ TodoService ]
})
export class TodosModule {
}
