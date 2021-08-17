import { Action } from '@ngrx/store';
import { Todo } from '../todo.model';

const enum TODO_ACTIONS {
  CREATE = '[todo] create',
  TOGGLE = '[todo] toggle',
  DELETE = '[todo] delete'
}

export class TodoAction implements Action {
  constructor(readonly type: TODO_ACTIONS, public payload: Todo) {
  }
}

export type TodoActionType = TodoAction;

export default TODO_ACTIONS;
