import "./FeedHeader.css";
<<<<<<< HEAD
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { Link } from "react-router-dom";
// import Profile from "../../assets/ProfilePicture.jpeg";

const FeedHeader = ({ title }) => {
  return (
    <>
      <div className="header">
        <div className="upper-header">
          <h1> {title}</h1>
        </div>
        <div className="search">
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const FeedHeader = () => {
    return (
      <>
        <div className="header">
          <div className="upper-header">
            <h1>Feed</h1>
          </div>
          <div className="search">
>>>>>>> df7e2b909d2c96327eb558d62895224c99cadfe9
          <div className="searchbar">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
            
            <input type="text" className="form-control" placeholder="search"></input>
                     
          </div>
          </div>
          <div className="card-header">
            {/* <Link to="user-profile">
              <img
                src={Profile}
                className="profilePicture"
                alt="profile Picture"
              />
            </Link> */}
          </div>
        </div>
        <div className="category">
          <Link to="/status">
            <button className="btn">Raisers</button>
          </Link>
          <button className="btn">Health</button>
          <button className="btn">Event</button>
          <button className="btn">Start-Up</button>
          <button className="btn">Top-Raisers</button>
        </div>
    </>
  );
};

export default FeedHeader;
