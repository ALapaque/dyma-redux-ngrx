import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { effects, reducers } from './store';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule,
    FlexLayoutModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'todoApp'
    }),
    EffectsModule.forRoot(effects)
  ],
  providers: [ TodoService ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
