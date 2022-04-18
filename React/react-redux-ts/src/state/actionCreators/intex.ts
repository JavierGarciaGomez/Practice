import { ActionTypes } from "../actionTypes/actionTypes";
import { Dispatch } from "redux";
import { Action } from "../actions/index";

export const depositMoney = (amount: number) => {
  console.log("depoist");
  return (dispatch: Dispatch<Action>) => {
    console.log("here");
    dispatch({ type: ActionTypes.bankDeposit, payload: amount });
  };
  console.log("here");
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.bankWithdraw, payload: amount });
  };
};

export const bankrupt = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.bankBankrupt });
  };
};
