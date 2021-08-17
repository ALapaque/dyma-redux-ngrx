import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import reducers from './store';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule,
    FlexLayoutModule,
    FormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [ TodoService ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
