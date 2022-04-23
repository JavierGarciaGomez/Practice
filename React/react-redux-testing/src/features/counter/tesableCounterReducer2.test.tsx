import { decrement, increment, incrementByAmount } from "./counterSlice";
import { CounterState, testableCounterReducer, testableCounterReducer2 } from "./testableCounterReducer";

describe("testable counter reducer", () => {
  const initialState: CounterState = {
    value: 3,
    status: "idle",
  };

  it("should handle increment", () => {
    const actual = testableCounterReducer2(initialState, { type: "increment", payload: 2 });
    expect(actual?.value).toEqual(4);
  });
});
