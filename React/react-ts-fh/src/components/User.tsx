import React, { useState } from "react";

interface User {
  uid: string;
  name: string;
}

export const User = () => {
  const [user, setUser] = useState<User>();
  const handleLogin = () => {
    setUser({
      uid: "ABC",
      name: "JGG",
    });
  };
  return (
    <div>
      <h3>User: usestate</h3>
      <button className="btn btn-outline-primary" onClick={handleLogin}>
        Login
      </button>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};
