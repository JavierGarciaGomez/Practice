import { ActionTypes } from "../actionTypes/actionTypes";
import { Action } from "../actions";

const initialState = 0;

export const bankReducer = (state: number = initialState, action: Action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.bankDeposit:
      return state + action.payload;

    case ActionTypes.bankWithdraw:
      return state - action.payload;

    case ActionTypes.bankBankrupt:
      return 0;

    default:
      return state;
  }
};
