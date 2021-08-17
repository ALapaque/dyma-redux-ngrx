import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomRouterState } from './router.helper';

export const routerSelector = createFeatureSelector<RouterReducerState<CustomRouterState>>('router');
export const routerStateSelector = createSelector(
  routerSelector,
  (routerState: RouterReducerState<CustomRouterState>) => routerState.state
);
