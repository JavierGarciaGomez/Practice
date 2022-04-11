import { Todo, TodoState } from "../interfaces/interfaces";

type TodoAction =
  | {
      type: "addTodo";
      payload: Todo;
    }
  | {
      type: "toggleTodo";
      payload: { id: string };
    };

export const todoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todoCount: state.todoCount + 1,
        todos: state.todos.concat(action.payload),
        pending: state.pending + 1,
      };

    case "toggleTodo":
      return {
        ...state,
        todos: state.todos.map(({ ...todo }) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};
