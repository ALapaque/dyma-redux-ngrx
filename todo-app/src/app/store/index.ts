import { ActionReducerMap } from '@ngrx/store';
import { TodoEffects } from './todo/todo.effects';
import { todosReducer, TodoState } from './todo/todo.reducer';

export interface State {
  todos: TodoState;
}

export const reducers: ActionReducerMap<State> = {
  todos: todosReducer
};

export const effects: Array<any> = [TodoEffects];


