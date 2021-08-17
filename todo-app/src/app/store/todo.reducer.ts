import { Todo } from '../todo.model';
import TODO_ACTIONS, { TodoActionType } from './todo.action';

export interface TodoState {
  data: Array<Todo>;
}

const initialState: TodoState = {
  data: new Array<Todo>({
    message: 'manger une pizza',
    done: false,
  })
};

export function todosReducer(state: TodoState = initialState, action: TodoActionType): TodoState {
  let index: number;
  console.log(state);
  switch (action.type) {
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
