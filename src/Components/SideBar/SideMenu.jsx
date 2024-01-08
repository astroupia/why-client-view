// Sidebar/Sidemenu.jsx

import { Link } from "react-router-dom";
import "./Sidebar.css"; // Importing sidebar styles
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Sidemenu = () => {
  return (
    <div>
      <div className="logo">
        <Link to="/">
          <img className="img" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="sidebar-menu">
        <div className="sidemenu">
          <Link to="/fund-detail">
            <h1 className="h12">Fund Detail</h1>
          </Link>
          <Link to="/terms">
            <h1 className="h13">Terms and Policy</h1>
          </Link>
          <Link to="/about-us">
            <h1 className="h13">About us</h1>
          </Link>
        </div>

        <div className="thebutton">
          <Link to="/sign-up" className="signup-b">
            Sign up
          </Link>

          <Link to="/sign-in" className="signin-f">
            Sign in
          </Link>
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

export default Sidemenu;
