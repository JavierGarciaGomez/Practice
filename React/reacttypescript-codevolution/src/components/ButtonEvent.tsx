// 6

import React from "react";

type ButtonProps = {
  handleClickEvent: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

export const ButtonEvent: React.FC<ButtonProps> = (props) => {
  return (
    <button onClick={(event) => props.handleClickEvent(event, 4)}>Click</button>
  );
};
