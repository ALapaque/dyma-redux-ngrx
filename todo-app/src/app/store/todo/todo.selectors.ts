import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '../../todo.model';
import { CustomRouterState } from '../router/router.helper';
import { routerStateSelector } from '../router/router.selectors';
import { TodoState } from './todo.reducer';

export const todosSelector = createFeatureSelector<TodoState>('todos');
export const todoListSelector = createSelector(
  todosSelector,
  (todoState: TodoState) => todoState.data
);

export const selectedTodoSelector = createSelector(
  todoListSelector,
  routerStateSelector,
  (todos: Array<Todo>, routerState: CustomRouterState) => {
    const todoId: number = Number(routerState.params.id);
    if (todos && todoId) {
      return todos.find((todo: Todo) => todo.id === todoId);
    } else {
      return null;
    }
  }
);
