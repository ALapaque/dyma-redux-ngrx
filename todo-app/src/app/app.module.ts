import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { effects, metaReducers, reducers } from './store';
import { CustomRouterStateSerializer } from './store/router/router.helper';

const ROUTES: Routes = [
  {
    path: '', redirectTo: 'todo', pathMatch: 'full',
  },
  {
    path: 'todo', loadChildren: () => import('src/app/todos/todos.module').then(m => m.TodosModule),
  }
];

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
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
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
