import React, { useContext } from "react";
import { Todo } from "../../interfaces/interfaces";
import { useTodos } from "../../hooks/useTodos";

interface Props {
  todo: Todo;
}
export const TodoItem = ({ todo }: Props) => {
  const { toggleTodo } = useTodos();

  const handleDbClick = () => {
    toggleTodo(todo.id);
  };
  const { desc } = todo;
  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "",
      }}
      onDoubleClick={handleDbClick}
    >
      {desc}
    </li>
  );
};
