import React from "react";

type Props = {
  styles: React.CSSProperties;
};

export const Container: React.FC<Props> = (props) => {
  return <div style={props.styles}>{props.children}</div>;
};
