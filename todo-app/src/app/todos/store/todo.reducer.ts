import { Todo } from '../../todo.model';
import TODO_ACTIONS, { TodoActionType } from './todo.actions';

export interface TodoState {
  data: {
    [todoId: number]: Todo
  };
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
        data: action.payload.reduce((acc, t: Todo) => {
          acc[t.id] = t;
          return acc;
        }, { ...state.data }),
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
        data: {
          ...state.data, [Object.keys(state.data).length + 1]: {
            ...action.payload,
            id: Object.keys(state.data).length + 1
          }
        }
      };
    case TODO_ACTIONS.DELETE:
      const remove = { ...state.data };
      delete remove[action.payload.id];

      return {
        ...state,
        data: remove
      };
    case TODO_ACTIONS.TOGGLE:
      console.log(state.data);
      console.log(state.data[action.payload.id]);
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            done: !state.data[action.payload.id].done
          }
        }
      };
    default:
      return state;
  }

}
