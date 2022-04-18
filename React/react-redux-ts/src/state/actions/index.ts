import { ActionTypes } from "../actionTypes/actionTypes";

export interface DepositAction {
  type: ActionTypes.bankDeposit;
  payload: number;
}

export interface WithdrawAction {
  type: ActionTypes.bankWithdraw;
  payload: number;
}

export interface BankruptAction {
  type: ActionTypes.bankBankrupt;
}

export type Action = DepositAction | WithdrawAction | BankruptAction;
