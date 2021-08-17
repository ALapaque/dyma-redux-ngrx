import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from './store';
import TODO_ACTIONS, { FetchTodo, TodoActions } from './store/todo/todo.actions';
import { TodoState } from './store/todo/todo.reducer';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent implements OnInit {
  public todos$: Observable<Todo[]>;
  public message: string;

  constructor(private todoService: TodoService,
              private store: Store<State>) {
    this.todos$ = this.store.pipe(
      select('todos'),
      map((todoState: TodoState) => todoState.data)
    );
  }

  ngOnInit(): void {
    this.store.dispatch(new FetchTodo());
  }

  public addTodo() {
    this.store.dispatch(new TodoActions(TODO_ACTIONS.CREATE, { message: this.message, done: false }));
  }

  public toggleTodo(todo: Todo) {
    this.store.dispatch(new TodoActions(TODO_ACTIONS.TOGGLE, todo));
  }

  public deleteTodo(todo: Todo) {
    this.store.dispatch(new TodoActions(TODO_ACTIONS.DELETE, todo));
  }
}
