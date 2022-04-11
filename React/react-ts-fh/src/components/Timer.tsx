import React, { useEffect, useRef, useState } from "react";

interface Props {
  miliSeconds: number;
}

export const Timer = ({ miliSeconds }: Props) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current ?? clearInterval(ref.current);
    console.log("use effect");
    ref.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, miliSeconds);
  }, [miliSeconds]);

  return (
    <div>
      Timer: <small>{seconds}</small>
    </div>
  );
};
