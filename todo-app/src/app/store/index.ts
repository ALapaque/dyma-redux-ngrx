import { ActionReducerMap } from '@ngrx/store';
import { todosReducer, TodoState } from './todo.reducer';

export interface State {
  todos: TodoState;
}

const reducers: ActionReducerMap<State> = {
  todos: todosReducer
};

export default reducers;
