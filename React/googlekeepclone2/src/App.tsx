import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material/";
import { light } from "./styles/themes/theme";
import { Main } from "./components/Main";

const result = {
  todos: [
    {
      id: 1,
      title: "help",
      notes: { text: "a note", isCompleted: false },
      labels: [{ id: 1, name: "red" }],
      color: "blue",
      isCheckboxMode: false,
    },
  ],
};

function App() {
  return (
    <ThemeProvider theme={light}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
