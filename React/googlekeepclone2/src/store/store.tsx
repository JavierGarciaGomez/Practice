import { createContext, useReducer } from "react";
import { Todo } from "../models/Todo";

interface Props {
  children: JSX.Element;
  todos: Todo[];
}

type ActionType =
  | { type: "CREATED"; payload: Todo }
  | { type: "DELETED"; payload: Todo }
  | { type: "UPDATED"; payload: Todo };

const TodosContext = createContext([]);

const reducer = (state: Todo[], action: ActionType) => {
  const mutatedItem = action.payload;
  if (!mutatedItem) {
    return [...state];
  }
  const mutatedIndex = state.findIndex((item) => item.id === mutatedItem.id);
  switch (action.type) {
    case "CREATED":
      if (mutatedIndex < 0) {
        state.push(mutatedItem);
      }
      break;
    case "DELETED":
      if (mutatedIndex >= 0) {
        state.splice(mutatedIndex, 1);
      }
      break;
    case "UPDATED":
      state[mutatedIndex] = mutatedItem;
      break;
  }
  return [...state];
};

export function TodosProvider({ children, todos }: Props) {
  const [state, dispatch] = useReducer(reducer, todos);
  return (
    <TodosContext.Provider value={[state, dispatch]}>
      {children}
    </TodosContext.Provider>
  );
}
