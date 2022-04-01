import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const UserAssertion = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({ name: "John", email: "john@mail.com" });
  };

  console.log(user);

  return (
    <div>
      <button onClick={handleLogin}>Login</button>

      {user && <div>User name is {user.name}</div>}
    </div>
  );
};
