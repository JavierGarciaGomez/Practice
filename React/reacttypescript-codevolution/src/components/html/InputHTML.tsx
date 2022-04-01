import React from "react";

type InputProps = React.ComponentProps<"input">;

export const InputHTML = (props: InputProps) => {
  return <input {...props} />;
};
