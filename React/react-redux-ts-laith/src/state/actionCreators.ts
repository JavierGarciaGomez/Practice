import { Dispatch } from "redux";
import { ActionsTypes } from "../interfaces/interfaces";
import { Actions } from "./reducer/bankReducer";

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({ type: ActionsTypes.DEPOSIT, payload: amount });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({ type: ActionsTypes.WITHDRAW, payload: amount });
  };
};

export const declareBankruptcy = () => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({ type: ActionsTypes.BANKRUPT });
  };
};
