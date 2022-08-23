import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
export default function LoginForm(status, isStatus) {
  return (
    <form className="login__form" name="login__form">
      <div className="login__title">Login</div>

      <div className="login__input_box">
        <div className="login__span">Username</div>
        <div className="login__flex">
          <span className="login__span_icon">
            <AiOutlineUser />
          </span>
          <input
            type="text"
            name="username"
            placeholder="Type your username"
            className="login__input_form"
          ></input>
        </div>
      </div>

      <div className="login__input_box">
        <div className="login__span">Password</div>
        <div className="login__flex">
          <span className="login__span_icon">
            <AiOutlineLock />
          </span>
          <input
            type="text"
            name="password"
            placeholder="Type your password"
            className="login__input_form"
          ></input>
        </div>
      </div>

      <div className="login__text-right">Forgot password?</div>

      <div className="login__form_button">
        <div className="login__form_button_wrap">
          <button className="login__button_login">Login</button>
        </div>
      </div>

      <div className="login__text-center">Or Sign Up Using</div>
      <div className="login__providers">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
      </div>
      <div className="login__text-center">Or Sign Using Account</div>
    </form>
  );
}
