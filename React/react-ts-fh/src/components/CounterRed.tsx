import React, { useReducer, useState } from "react";

const initialState = {
  counter: 10,
};

type IncrementType = { type: "incrementar"; payload: number };
type IncrementVarType = { type: "incrementaren2"; payload: number };
type ResetType = { type: "reset" };

type ActionType = IncrementType | IncrementVarType | ResetType;

const counterReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      return { ...state, counter: state.counter + 1 };

    case "incrementaren2":
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

export const CounterRed = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      <h3>Counter Reducer: {state.counter}</h3>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: "incrementar", payload: 1 });
        }}
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: "incrementaren2", payload: 2 });
        }}
      >
        +2
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </>
  );
};
