import React, { useState } from "react";
import { AuthUser } from "../components/context/UserContext";

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({ name: "John", email: "john@mail.com" });
  };
  const handleLogout = () => {
    setUser(null);
  };
  console.log(user);

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {user && <div>User name is {user.name}</div>}
    </div>
  );
};
