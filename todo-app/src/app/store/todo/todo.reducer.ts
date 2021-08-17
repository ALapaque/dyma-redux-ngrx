import { Todo } from '../../todo.model';
import TODO_ACTIONS, { TodoActionType } from './todo.actions';

export interface TodoState {
  data: Array<Todo>;
  loadingState: LoadingState;
}

export interface LoadingState {
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: TodoState = {
  data: null,
  loadingState: {
    loaded: false,
    loading: false,
    error: null
  }
};

export function todosReducer(state: TodoState = initialState, action: TodoActionType): TodoState {
  let index: number;

  switch (action.type) {
    case TODO_ACTIONS.FETCH:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          loading: true
        }
      };
    case TODO_ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loadingState: {
          ...state.loadingState,
          loading: false,
          loaded: true,
          error: null,
        }
      };
    case TODO_ACTIONS.FETCH_ERROR:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          loading: false,
          error: action.payload
        }
      };
    case TODO_ACTIONS.CREATE:
      return {
        ...state,
        data: [ ...state.data, action.payload ]
      };
    case TODO_ACTIONS.DELETE:
      index = state.data.findIndex((todo: Todo) => todo === action.payload);

      return {
        ...state,
        data: state.data.filter((todo: Todo, i: number) => i !== index)
      };
    case TODO_ACTIONS.TOGGLE:
      index = state.data.findIndex((todo: Todo) => todo === action.payload);

      return {
        ...state,
        data: state.data.map((todo: Todo, i: number) => i === index ? { ...todo, done: !todo.done } : todo)
      };
    default:
      return state;
  }

}
