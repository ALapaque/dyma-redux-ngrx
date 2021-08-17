import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '../../todo.model';
import { CustomRouterState } from '../../store/router/router.helper';
import { routerStateSelector } from '../../store/router/router.selectors';
import { TodoState } from './todo.reducer';

export const todosSelector = createFeatureSelector<TodoState>('todos');
export const todoListSelector = createSelector(
  todosSelector,
  (todoState: TodoState) => todoState.data
);
export const todoListArraySelector = createSelector(
  todosSelector,
  (todoState: TodoState) => {
    if (todoState.data) {
      return Object.keys(todoState.data).map((id: string) => todoState.data[id]);
    } else {
      return null;
    }
  }
);

export const selectedTodoSelector = createSelector(
  todoListSelector,
  routerStateSelector,
  (todos: { [todoId: string]: Todo }, routerState: CustomRouterState) => {
    const todoId: string = routerState.params.id;
    if (todos && todoId) {
      return todos[todoId];
    } else {
      return null;
    }
  }
);
