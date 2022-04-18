import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import validator from "validator";

function App() {
  const [signupInput, setSignupInput] = useState({ email: "", password: "", confirmPassword: "" });
  const { email, password, confirmPassword } = signupInput;
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      return setError("the email you input is invalid");
    }
    if (password.length < 5) {
      return setError("the password you entered should contain 5 or more characters");
    }
    if (password !== confirmPassword) {
      return setError("the passwords don't match");
    }
  };

  const handleChange = (e) => {
    setSignupInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="container my-5">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" name="email" id="email" className="form-control" onChange={handleChange} value={email} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" name="password" id="password" className="form-control" onChange={handleChange} value={password} />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm password
          </label>
          <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" onChange={handleChange} value={confirmPassword} />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
