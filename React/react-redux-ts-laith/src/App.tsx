import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";

import { State } from "./state/reducer";

function App() {
  const [count, setCount] = useState(0);
  const state = useSelector((state: State) => state.bank);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, declareBankruptcy } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
      <button onClick={() => declareBankruptcy()}>Bankrupt</button>
    </div>
  );
}

export default App;
