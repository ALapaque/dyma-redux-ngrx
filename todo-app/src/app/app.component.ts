import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from './store';
import TODO_ACTIONS, { TodoAction } from './store/todo.action';
import { TodoState } from './store/todo.reducer';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent {
  public todos$: Observable<Todo[]>;
  public message: string;

  constructor(private todoService: TodoService,
              private store: Store<State>) {
    this.todos$ = this.store.pipe(
      select('todos'),
      map((todoState: TodoState) => todoState.data)
    );
  }

  public addTodo() {
    this.store.dispatch(new TodoAction(TODO_ACTIONS.CREATE, { message: this.message, done: false }));
  }

  public toggleTodo(todo: Todo) {
    this.store.dispatch(new TodoAction(TODO_ACTIONS.TOGGLE, todo));
  }

  public deleteTodo(todo: Todo) {
    this.store.dispatch(new TodoAction(TODO_ACTIONS.DELETE, todo));
  }
}
