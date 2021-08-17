import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { CustomRouterState } from './router/router.helper';
import { TodoEffects } from './todo/todo.effects';
import { todosReducer, TodoState } from './todo/todo.reducer';



export interface State {
  todos: TodoState;
  router: RouterReducerState<CustomRouterState>;
}

export const reducers: ActionReducerMap<State> = {
  todos: todosReducer,
  router: routerReducer
};

export const effects: Array<any> = [TodoEffects];


