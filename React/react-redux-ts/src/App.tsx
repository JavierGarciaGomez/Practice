import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { rootReducer, RootState } from "./state/reducers/index";
import {
  bankrupt,
  depositMoney,
  withdrawMoney,
} from "./state/actionCreators/intex";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";

function App() {
  const state = useSelector((state: RootState) => state.bank);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className="App">
      <h2>Hola</h2>
      <h1>{state}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
