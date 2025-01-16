import { Form } from "react-router";
import loginImage from "../assets/loginImage.png";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <section className="login">
      <div className="login__section-1">
        <img src={logo} alt="" className="login__section-1__logo" />
        <div>
          <img src={loginImage} alt="" />
        </div>
      </div>
      <div className="login__section-2">
        <div>
          <h1>Wellcome!</h1>
          <p>enter details to login</p>
          <Form className="login__section-2__form">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="password" />
            <p>Forgot password</p>
            <button className="btn">Login</button>
          </Form>
        </div>
      </div>
    </section>
  );
};
export default Login;
