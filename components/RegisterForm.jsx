import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
export default function RegisterForm() {
  return (
    <form className="login__form" name="register__form">
      <div className="login__title">Sign Up</div>

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
      <div className="login__input_box">
        <div className="login__span">Confirm Password</div>
        <div className="login__flex">
          <span className="login__span_icon">
            <AiOutlineLock />
          </span>
          <input
            type="text"
            name="confirm_password"
            placeholder="Confirm your password"
            className="login__input_form"
          ></input>
        </div>
      </div>

      <div className="login__form_button">
        <div className="login__form_button_wrap">
          <div className="login__form__button_box">
            <button className="login__button_login">Sign Up</button>
          </div>
        </div>
      </div>

      <div className="login__text-center">Or Sign Up Using</div>
      <div className="login__providers">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
      </div>
      <div className="login__text-center">Back to login</div>
    </form>
  );
}
