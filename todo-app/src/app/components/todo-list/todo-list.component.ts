import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../../store';
import TODO_ACTIONS, { FetchTodo, TodoActions } from '../../store/todo/todo.actions';
import { selectedTodoSelector, todoListSelector } from '../../store/todo/todo.selectors';
import { Todo } from '../../todo.model';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [ './todo-list.component.css' ]
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<Todo[]> = this.store.pipe(select(todoListSelector));
  public message: string;
  public selectedTodo$: Observable<Todo> = this.store.pipe(select(selectedTodoSelector));

  constructor(private todoService: TodoService,
              private store: Store<State>) {
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
