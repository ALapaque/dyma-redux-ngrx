import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Todo } from '../../todo.model';
import { TodoService } from '../../todo.service';
import TODO_ACTIONS, { FetchTodoError, FetchTodoSuccess } from './todo.actions';

@Injectable()
export class TodoEffects {
  public fetchTodo$: Observable<Action> = createEffect(() => (
      this.actions$.pipe(
        ofType(TODO_ACTIONS.FETCH),
        switchMap(() => this.todoService.getTodo()),
        map((todos: Array<Todo>) => new FetchTodoSuccess(todos)),
        catchError((err: any) => of(new FetchTodoError(err)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {
  }
}
