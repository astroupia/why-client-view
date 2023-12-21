//side bar/signin.jsx alska goes baba
import { Link } from "react-router-dom";
import "./SideBar.css";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons/faFacebookSquare";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";

const Signin = () => {
  return (
    <div className="sidebar-root">
      {/* the why Logo Section */}
      {/* ... */}

      {/* Sign Up Section */}
      <div className="logo">
        <img className="img" src={logo} alt="logo" />
      </div>
      <h2 className="h234">Sign-In</h2>
      <div className="signup-container">
        {/* Email Input */}
        <div className="input-container-2">
          {/* <img src="email-icon.png" alt="Email" />*/}
          <input type="email" placeholder="Email" />
        </div>

        {/* Password Input */}
        <div className="input-container-4">
          {/*<img src="password-icon.png" alt="Password" />*/}
          <input type="password" placeholder="Password" />
        </div>

        {/* Sign Up Button */}
        <Link className="signup-button" to="/sign-in">
          Sign in
        </Link>

        {/* Already have an account */}
        <p className="alex">
          No account?{" "}
          <a className="bob">
            {" "}
            <b>Sign up </b>
          </a>
        </p>

        {/*
       <p className="alex">No account? <Link to="/signup" className="bob"><b>Sign up</b></Link></p>*/}
        {/* Sign Up with Google */}
        <div className="horizontal-line-with-text">
          <hr />
          <span>or Sign up with</span>
          <hr />
        </div>
        <div className="flex_google">
          <button className="signup-google-button">
            <img className="google" src={logo2} alt="google" />
            Sign Up with Google
          </button>
        </div>
        <div className="thelogo">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            style={{ fontSize: "40px", color: "#004225" }}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ fontSize: "40px", color: "#004225" }}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ fontSize: "40px", color: "#004225" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
