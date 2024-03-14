import { useAuthContext } from "../../contexts/useAuth.js";
import useForm from "../../hooks/useForm.js";

const RegisterKeys = {
  Email: "email",
  Username: "username",
  Password: "password",
};

export default function Register() {
  const { registerHandler } = useAuthContext();
  const { values, changeHandler } = useForm(null, {
    [RegisterKeys.Email]: "",
    [RegisterKeys.Username]: "",
    [RegisterKeys.Password]: "",
  });


  const registerSubmit = (e) => {
    e.preventDefault();

    registerHandler(values)
  }
  return (
    <section id="register-page" className="content auth">
      <form id="register" onSubmit={registerSubmit}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Register</h1>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name={[RegisterKeys.Email]}
            value={values[RegisterKeys.Email]}
            onChange={changeHandler}
            placeholder="maria@email.com"
          />

          <label htmlFor="user">Username:</label>
          <input
            type="text"
            id="register-username"
            name={[RegisterKeys.Username]}
            value={values[RegisterKeys.Username]}
            onChange={changeHandler}
          />

          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="register-password"
            name={[RegisterKeys.Password]}
            value={values[RegisterKeys.Password]}
            onChange={changeHandler}
          />

          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
          />

          <input className="btn submit" type="submit" value="Register" />

          <p className="field">
            <span>
              If you already have profile click <a href="#">here</a>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
}
