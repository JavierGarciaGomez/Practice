import React from "react";
import { Loading } from "./Loading";
import { MainComponent } from "./MainComponent";

const result = {
  data: {
    todos: [
      {
        id: 1,
        title: "help",
        notes: { text: "a note", isCompleted: false },
        // labels: [{ id: 1, name: "red" }],
        color: "blue",
        isCheckboxMode: false,
      },
    ],
    labels: [{ id: 1, name: "red" }],
    user: {
      name: "JGG",
      email: "javi@mail.com",
      listMode: true,
      darkMode: true,
    },
  },
  fetching: false,
};
export const Main = () => {
  if (result.fetching) {
    return <Loading />;
  } else if (result.data) {
    return (
      <MainComponent
        todos={result.data.todos}
        labels={result.data.labels}
        user={result.data.user}
      />
    );
  } else {
    return <div>A ver</div>;
  }
};
