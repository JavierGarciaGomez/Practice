import React, { useState } from "react";
import { Timer } from "./Timer";

export const TimerParent = () => {
  const [miliSeconds, setMiliSeconds] = useState(1000);

  return (
    <div>
      <div>TimerParent</div>
      <span>Milisegundos {miliSeconds}</span>
      <br />
      <button
        className="btn btn-outline-success"
        onClick={() => {
          setMiliSeconds(1000);
        }}
      >
        1000
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => {
          setMiliSeconds(3000);
        }}
      >
        3000
      </button>
      <Timer miliSeconds={miliSeconds} />
    </div>
  );
};
