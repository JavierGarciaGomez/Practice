import React from "react";
import { Counter } from "./components/Counter";
import { CounterRed } from "./components/CounterRed";
import { Formulario } from "./components/Formulario";
import { TimerParent } from "./components/TimerParent";
import { Todo } from "./components/todo/Todo";
import { User } from "./components/User";

function App() {
  return (
    <div className="App">
      <h1>React + TypeScript - Fernando Herrera</h1>
      <hr />
      <h2>2. Use State</h2>
      <Counter />
      <User />
      <hr />
      <h2>3. Use Effect and UseRef</h2>
      <TimerParent />
      <hr />
      <h2>4. Use Reducer</h2>
      <CounterRed />
      <hr />
      <h2>5. Custom Hook</h2>
      <Formulario />
      <hr />
      <h2>6. Context (Todo App)</h2>
      <Todo />
    </div>
  );
}

export default App;
