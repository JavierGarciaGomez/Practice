import React from "react";

type GreetProps = {
  name: string;
  unreadMsgs?: number;
  isLoggedIn: boolean;
};

export const Greet: React.FC<GreetProps> = (props) => {
  const { name, unreadMsgs = 0 } = props;
  return (
    <div>
      <h2>
        {" "}
        {props.isLoggedIn
          ? `Hello, ${name}. You have  ${unreadMsgs} unread messages `
          : `Please log in`}
      </h2>
    </div>
  );
};
