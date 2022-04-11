import React from "react";
import { TodoProvider } from "../../context/TodoProvider";
import { TodoList } from "./TodoList";
import { TodosTitle } from "./TodosTitle";

export const Todo = () => {
  return (
    <TodoProvider>
      <TodosTitle />
      <TodoList />
    </TodoProvider>
  );
};
