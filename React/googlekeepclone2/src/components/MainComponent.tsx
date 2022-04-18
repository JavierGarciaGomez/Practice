import React from "react";
import { Todo } from "../models/Todo";

interface Props {
  todos: Todo[];
  labels: {}[];
  user: {};
}

export const MainComponent = ({ todos }: Props) => {
  return (
    <div>
      {todos.map((element) => (
        <div>elemento</div>
      ))}
    </div>
  );
};
