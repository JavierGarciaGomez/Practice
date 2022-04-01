// 6

import React from "react";

type ButtonProps = {
  handleClick: () => void;
};

export const Button: React.FC<ButtonProps> = (props) => {
  return <button onClick={props.handleClick}>Click</button>;
};
