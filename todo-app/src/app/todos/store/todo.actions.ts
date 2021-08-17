import { Action } from '@ngrx/store';
import { Todo } from '../../todo.model';

const enum TODO_ACTIONS {
  CREATE = '[todo] create',
  TOGGLE = '[todo] toggle',
  DELETE = '[todo] delete',
  FETCH = '[todo] fetch in progress',
  FETCH_SUCCESS = '[todo] fetch successful',
  FETCH_ERROR = '[todo] fetch error'
}

export class TodoActions implements Action {
  constructor(readonly type: TODO_ACTIONS, public payload: Todo) {
  }
}

export class FetchTodo implements Action {
  readonly type: TODO_ACTIONS = TODO_ACTIONS.FETCH;
  constructor(public payload?: Array<Todo> | Todo) {
  }
}

export class FetchTodoSuccess implements Action {
  readonly type: TODO_ACTIONS = TODO_ACTIONS.FETCH_SUCCESS;
  constructor(public payload: Array<Todo>) {
  }
}

export class FetchTodoError implements Action {
  readonly type: TODO_ACTIONS = TODO_ACTIONS.FETCH_ERROR;
  constructor(public payload: any) {
  }
}

export type TodoActionType = TodoActions | FetchTodoSuccess | FetchTodoError | FetchTodo;

export default TODO_ACTIONS;
