import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { effects, reducers } from './store';
import { CustomRouterStateSerializer } from './store/router/router.helper';
import { TodoService } from './todo.service';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const ROUTES: Routes = [
  {
    path: '', redirectTo: 'todo', pathMatch: 'full',
  },
  {
    path: 'todo', component: TodoListComponent,
  },
  {
    path: 'todo/:id', component: TodoListComponent
  }
];

@NgModule({
  declarations: [ AppComponent, TodoListComponent ],
  imports: [ BrowserModule,
    FlexLayoutModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'todoApp'
    }),
    EffectsModule.forRoot(effects),
    RouterModule.forRoot(ROUTES),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomRouterStateSerializer,
      stateKey: 'router'
    }),
  ],
  providers: [ TodoService ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
