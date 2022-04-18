import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const UserC = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({ name: "John", email: "john@mail.com" });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {userContext?.user && <div>User name is {userContext.user.name}</div>}
    </div>
  );
};
