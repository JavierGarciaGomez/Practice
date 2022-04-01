import React from "react";
import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

export const Private: React.FC<PrivateProps> = ({
  isLoggedIn,
  component: Component,
}) => {
  if (isLoggedIn) {
    return <Component name="John" />;
  } else {
    return <Login />;
  }
};
