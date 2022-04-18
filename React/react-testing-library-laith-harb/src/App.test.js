import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  // console.log("hol");
  // render(<App />);
});

const typeIntoForm = ({ email, password, confirmPassword }) => {
  const emailInputelement = screen.getByRole("textbox");
  const passwordInputelement = screen.getByLabelText("Password");
  const confirmPassWordElement = screen.getByLabelText(/confirm password/i);
  if (email) {
    userEvent.type(emailInputelement, email);
  }
  if (password) {
    userEvent.type(passwordInputelement, password);
  }
  if (confirmPassWordElement) {
    userEvent.type(confirmPassWordElement, confirmPassword);
  }
  return { emailInputelement, passwordInputelement, confirmPassWordElement };
};

const clickOnSubmit = () => {
  const submitButton = screen.getByRole("button", { type: /submit/ });
  userEvent.click(submitButton);
};

afterEach(() => {});

describe("App component tests", () => {
  test("inputs should be initially empty", () => {
    render(<App />);
    const emailInputelement = screen.getByRole("textbox");
    expect(emailInputelement.value).toBe("");
    const passwordInputelement = screen.getByLabelText("Password");
    expect(passwordInputelement.value).toBe("");
    const confirmPassWordElement = screen.getByLabelText(/confirm password/i);
    expect(confirmPassWordElement.value).toBe("");
  });
  test("Should be able to type an email", () => {
    render(<App />);
    const { emailInputelement } = typeIntoForm({ email: "selena@gmail.com" });
    expect(emailInputelement.value).toBe("selena@gmail.com");
  });

  test("Should be able to type a password", () => {
    render(<App />);
    const { passwordInputelement } = typeIntoForm({ password: "monote" });
    expect(passwordInputelement.value).toBe("monote");
  });

  test("Should be able to type the password confirmation", () => {
    render(<App />);
    const { confirmPassWordElement } = typeIntoForm({ confirmPassword: "monote" });
    expect(confirmPassWordElement.value).toBe("monote");
  });

  test("Should show email error message on invalid email", () => {
    render(<App />);
    const emailErrorElement = screen.queryByText(/input is invalid/i);
    typeIntoForm({ email: "selenagmail.com" });

    expect(emailErrorElement).not.toBeInTheDocument();

    clickOnSubmit();
    const emailErrorElementAgain = screen.queryByText(/the email you input is invalid/i);
    expect(emailErrorElementAgain).toBeInTheDocument();
  });

  test("Should show password error if password is less than 5 chars ", () => {
    render(<App />);
    // const emailInputelement = screen.getByRole("textbox", { name: /email/i });
    const passwordErrorElement = screen.queryByText(/password you entered should contain/i);
    // const passwordInputelement = screen.getByLabelText("Password");
    // const submitButton = screen.getByRole("button", { type: /submit/ });
    // userEvent.type(emailInputelement, "selena@gmail.com");
    expect(passwordErrorElement).not.toBeInTheDocument();
    // userEvent.type(passwordInputelement, "123");
    typeIntoForm({ email: "selena@gmail.com", password: "123" });

    clickOnSubmit();
    const passwordErrorElementAgain = screen.queryByText(/password you entered should contain/i);
    expect(passwordErrorElementAgain).toBeInTheDocument();
  });

  test("Should show an error if the passwords don't match ", () => {
    render(<App />);
    // const emailInputelement = screen.getByRole("textbox", { name: /email/i });
    // const passwordInputelement = screen.getByLabelText("Password");
    // const confirmPassWordElement = screen.getByLabelText(/confirm password/i);
    const confirmPasswordErrorElement = screen.queryByText(/passwords don't match/i);
    // const submitButton = screen.getByRole("button", { type: /submit/ });
    // userEvent.type(emailInputelement, "selena@gmail.com");
    // userEvent.type(passwordInputelement, "secret");
    // userEvent.type(confirmPassWordElement, "secret");
    // typeIntoForm({ email: "selena@gmail.com", password: "secret", confirmPassword: "secret" });
    // clickOnSubmit();
    // expect(confirmPasswordErrorElement).not.toBeInTheDocument();
    // userEvent.type(passwordInputelement, "secreto");
    typeIntoForm({ email: "selena@gmail.com", password: "secret", confirmPassword: "secreto" });
    clickOnSubmit();
    const confirmPasswordErrorElementAgain = screen.queryByText(/passwords don't match/i);
    expect(confirmPasswordErrorElementAgain).toBeInTheDocument();
  });

  test("Should show no error message if every input is valid ", () => {
    render(<App />);
    // const emailInputelement = screen.getByRole("textbox", { name: /email/i });
    // const passwordInputelement = screen.getByLabelText("Password");
    // const confirmPassWordElement = screen.getByLabelText(/confirm password/i);
    // const submitButton = screen.getByRole("button", { type: /submit/ });
    // userEvent.type(emailInputelement, "selena@gmail.com");
    // userEvent.type(passwordInputelement, "secret");
    // userEvent.type(confirmPassWordElement, "secret");
    typeIntoForm({ email: "selena@gmail.com", password: "secret", confirmPassword: "secret" });
    clickOnSubmit();
    const emailErrorElement = screen.queryByText(/input is invalid/i);
    const passwordErrorElement = screen.queryByText(/password you entered should contain/i);
    const confirmPasswordErrorElement = screen.queryByText(/passwords don't match/i);
    expect(emailErrorElement).not.toBeInTheDocument();
    expect(passwordErrorElement).not.toBeInTheDocument();
    expect(confirmPasswordErrorElement).not.toBeInTheDocument();
  });
});
