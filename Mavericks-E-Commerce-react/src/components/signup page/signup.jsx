import "./signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <form id="mainform2">
        <div id="name">
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="First name"
            required
          />
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Last name"
            required
          />
        </div>

        <div id="Email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email id"
            required
          />
        </div>

        <div id="password">
          <input
            type="password"
            name="pwd"
            id="pwd"
            placeholder="Password"
            required
          />
        </div>

        <div id="submit">
          <Link to="/home">
            <button type="submit" id="submitbtn">
              Submit
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}
export default Signup;
