import { cakeActions } from "./../cakeSlice";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIceCreams: 10,
};
export const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams = state.numOfIceCreams + action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIceCreams--;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state, action) => {
      state.numOfIceCreams--;
    });
  },
});

export const iceCreamActions = iceCreamSlice.actions;
export const iceCreamReducer = iceCreamSlice.reducer;
