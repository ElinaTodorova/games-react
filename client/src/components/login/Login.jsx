import { useState } from "react";
import { useAuthContext } from "../../contexts/authContext.jsx";
import useForm from "../../hooks/useForm.js";

const LoginKeys = {
  Email: "email",
  Password: "password",
};

export default function Login() {
  const {  loginHandler } = useAuthContext();

  const { values, changeHandler } = useForm(null, {
    [LoginKeys.Email]: "",
    [LoginKeys.Password]: "",
  });

  const loginSubmit = (e) => {
    e.preventDefault();

    loginHandler(values)
  }

  return (
    <section id="login-page" className="auth">
      <form id="login" onSubmit={loginSubmit}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name={LoginKeys.Email}
            onChange={changeHandler}
            value={values[LoginKeys.Email]}
            placeholder="Sokka@gmail.com"
          />

          <label htmlFor="login-pass">Password:</label>
          <input
            type="password"
            id="login-password"
            name={LoginKeys.Password}
            value={values[LoginKeys.Password]}
            onChange={changeHandler}
          />
          <input type="submit" className="btn submit" value="Login" />
          <p className="field">
            <span>
              If you don&apos;t have profile click <a href="#">here</a>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
}
