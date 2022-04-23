import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { decrement, increment, incrementAsync, incrementByAmount } from "./counterSlice";
import { Type } from "../../../../../../Courses/TypeScript/TypeScript_FH/s11_Generics/src/interfaces/pokemon";

export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  value: 0,
  status: "idle",
};

export const testableCounterReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(increment, (state) => ({ ...state, value: state.value + 1 }))
    .addCase(decrement, (state) => ({ ...state, value: state.value - 1 }))
    .addCase(incrementByAmount, (state, action: PayloadAction<number>) => ({
      ...state,
      value: state.value + action.payload,
    }))
    .addCase(incrementAsync.pending, (state) => ({
      ...state,
      status: "loading",
    }))
    .addCase(incrementAsync.fulfilled, (state, action) => ({
      ...state,
      status: "idle",
      value: state.value + action.payload,
    }))
);

export const testableCounterReducer2 = (state = initialState, action = { type: "increment", payload: 0 }) => {
  switch (action.type) {
    case "increment":
      return { ...state, value: state.value + 1 };
  }
};
