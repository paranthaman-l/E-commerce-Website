// import { auth, provider } from '../../firebase';
import React from "react";
import "./login.css";
import { useStates } from "../../States";
import { Link } from "react-router-dom";
function Login() {
  const { handleLogin, email, setEmail, password, setPassword, LoginSubmit } =
    useStates();
  return (
    <>
      <div className="master1">
        <div className="text_left">
          <h1>Welcome to Mavericks</h1>
          <h3>
            your one-stop shop for all grocery, and home needs Satisfy all your
            grocery needs at Mavericks - your one-stop-shop
          </h3>
        </div>
        <div className="right_login">
          <div id="loginbox">
            <div id="logobox">
              <img
                id="logo"
                src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1670425438/M_logo1_cdv8sh.png"
                alt="Mavericks logo"
              />
            </div>
            <div id="mainform">
              <div id="googlelogo">
                <img
                  id="googlebox"
                  src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1670577982/googlelogo_jjwnod.jpg"
                  onClick={function (event) {
                    handleLogin();
                  }}
                  alt="Google sign-in logo"
                />
              </div>

              <div id="or">
                <span id="welcome">
                  <b>____________ OR ____________</b>
                </span>
              </div>

              <div className="mailandotp">
                <input
                  type="email"
                  name="username"
                  id="userid"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <br />
              </div>

              <div className="verification">
                <input
                  type="password"
                  name="password"
                  id="pw"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <br />
                <button id="verify" onClick={LoginSubmit}>
                  <b>SignIn</b>
                </button>
                <br />
              </div>

              <div id="signuptext">
                <span id="newuser">
                  <b>New User? </b>
                </span>
                <span id="signup">
                  <Link to="/signup">
                    <u> create a new account</u>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
