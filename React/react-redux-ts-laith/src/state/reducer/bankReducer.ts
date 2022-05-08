import { ActionsTypes } from "../../interfaces/interfaces";

export type BankReducerState = number;

export type Actions =
  | {
      type: ActionsTypes.DEPOSIT;
      payload: number;
    }
  | {
      type: ActionsTypes.WITHDRAW;
      payload: number;
    }
  | {
      type: ActionsTypes.BANKRUPT;
    };

export const bankReducer = (state: BankReducerState = 0, action: Actions) => {
  switch (action.type) {
    case ActionsTypes.DEPOSIT:
      return state + action.payload;

    case ActionsTypes.WITHDRAW:
      return state - action.payload;

    case ActionsTypes.BANKRUPT:
      return 0;

    default:
      return state;
  }
};
