import React from "react";
import { useTodos } from "../../hooks/useTodos";

export const TodosTitle = () => {
  const { pendingTodos, completedTodos } = useTodos();

  return (
    <div>
      <h4>Pending todos: {pendingTodos}</h4>
      <h4>Completed todos: {completedTodos}</h4>
    </div>
  );
};
