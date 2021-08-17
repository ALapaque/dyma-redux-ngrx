import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { CustomRouterState } from './router/router.helper';

export interface State {
  router: RouterReducerState<CustomRouterState>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};

export const effects: Array<any> = [];


