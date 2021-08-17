import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { CustomRouterState } from './router/router.helper';

export interface State {
  router: RouterReducerState<CustomRouterState>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};

export function logger(reduder: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any) => {
    console.log('state : ', state);
    console.log('action : ', action);

    return reduder(state, action);
  };
}

export const effects: Array<any> = [];
export const metaReducers: MetaReducer<State>[] = [
  logger
];


