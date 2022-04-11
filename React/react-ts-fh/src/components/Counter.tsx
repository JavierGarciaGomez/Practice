import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = (num: number = 1): void => {
    setCounter((prev) => prev + num);
  };
  return (
    <div className="mt-2">
      <h3>Counter: usestate</h3>
      <span>Valor: {counter}</span>
      <br />
      <button className="btn btn-primary mt-2" onClick={() => increment()}>
        +1
      </button>
      <button
        className="btn btn-primary mt-2 ms-2"
        onClick={() => increment(2)}
      >
        +2
      </button>
      <button
        className="btn btn-danger mt-2 ms-2"
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
    </div>
  );
};
